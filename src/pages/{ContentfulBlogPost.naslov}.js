import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SEO from '../components/SEO'

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
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  const {naslov, naslovnaSlika} = data.contentfulBlogPost
  console.log(naslov)
  const pathToImage = getImage(naslovnaSlika)
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
      <SEO title={naslov} image_url={pathToImage.images.fallback.src}/>
      <main className="page">
        <div className="blog-header">
          <GatsbyImage image={pathToImage} alt="" className="blog-header-image" />
          <h2>{naslov}</h2>
        </div>
        <section className="blog-page">
          {renderRichText(blogPost, options)}
        </section>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate
