import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import HeaderSlider from '../components/HeaderSlider'
import BlogPosts from '../components/BlogPosts'
import SEO from '../components/SEO'

export default function Home() {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlogPost(filter: {featured: {eq: true}}, sort:{fields: datum, order: DESC}) {
      nodes {
        id
        datum
        naslov
        naslovnaSlika {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
        rubrika
        autor
      }
    }
  }
  `)
  const posts = data.allContentfulBlogPost.nodes
  return (
    <Layout>
      <SEO title="Početna" currentUrl="https://www.gdcrespublica.ba" image_url="https://gdcrespublica.ba/static/18c1d12acf96ed4d1c1a396ec0b0941f/d41bd/slika-1.png" />
      <main>
        <HeaderSlider />
        <section className="home">
          <h2>O nama</h2>
          <p>Građanski demokratski centar Res Publica je nevladina organizacija ili tačnije registrovano udruženje građana čiji su programski ciljevi sledeći:  <button className="btn"><Link to="/misija">Saznaj više</Link></button></p>
        </section>
        <section className="featured-blogs home">
          <h2>Izdvojene Blog Objave</h2>
          <BlogPosts posts={posts} />
        </section>
      </main>
    </Layout>
  )
}
