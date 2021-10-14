import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import AllBlogPosts from '../components/AllBlogPosts'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/SEO'

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" description="Naše blog objave" image_url="https://gdcrespublica.ba/static/18c1d12acf96ed4d1c1a396ec0b0941f/d41bd/slika-1.png" />
      <Header
        title="Blog"
        description="Izdvojene blog objave"
      >
        <StaticImage 
          src="../assets/images/blog.jpg"
          alt="Blog objave"
          className="hero-image"
          layout="fullWidth"
          placeholder="blurred"
        />
      </Header>
      <main className="page">
        <h2>Blog objave</h2>
        <AllBlogPosts />
      </main>
    </Layout>
  )
}

export default Blog
