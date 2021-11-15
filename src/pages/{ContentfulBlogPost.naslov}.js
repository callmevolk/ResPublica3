import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SEO from '../components/SEO'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import slugify from 'slugify'

export const query = graphql`
  query getPost($naslov: String) {
    contentfulBlogPost(naslov: {eq: $naslov}) {
      tekst {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
      naslov
      naslovnaSlika {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
      datum
      autor
      rubrika
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  const {naslov, naslovnaSlika, autor, rubrika} = data.contentfulBlogPost
  const pathToImage = getImage(naslovnaSlika)
  const imageLink = pathToImage.images.fallback.src
  let slug, slug2
  if (naslov.includes('đ')) {
    let naslov2 = naslov.replace('đ', 'd')
    slug = slugify(naslov2, { lower: true })
    slug2 = slugify(slug, {remove:  /[*+~.()'"!:@]/g}) 
  } else {
    slug = slugify(naslov, { lower: true })
    slug2 = slugify(slug, {remove:  /[*+~.()'"!:@]/g}) 
  }
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return <img src={node.data.target.fixed.src} alt="blog post" />
      }
    }
  }
  const blogPost = data.contentfulBlogPost.tekst
  return (
    <Layout>
      <SEO title={naslov} currentUrl={`https://www.gdcrespublica.ba/${slug2}`} image_url={imageLink}/>
      <main className="page">
        <div className="blog-header">
          <GatsbyImage image={pathToImage} alt="" className="blog-header-image" />
          <h2>{naslov}</h2>
        </div>
        <section className="blog-page">
          <p className="blog-rubrika">Rubrika: {rubrika}</p>
          {renderRichText(blogPost, options)}
          <p>{autor}</p>
          <div className="share-buttons">
            <FacebookShareButton url={`https://www.gdcrespublica.ba/${slug2}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={`https://www.gdcrespublica.ba/${slug2}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={`https://www.gdcrespublica.ba/${slug2}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate
