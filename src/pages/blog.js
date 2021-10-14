import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import AllBlogPosts from '../components/AllBlogPosts'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/SEO'

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" description="Naše blog objave" />
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
