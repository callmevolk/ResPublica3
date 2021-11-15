import React from 'react'
import BlogPosts from './BlogPosts'
import { graphql, useStaticQuery } from 'gatsby'

const AllBlogPosts = () => {
  const data = useStaticQuery(graphql`{
    allContentfulBlogPost(sort: {fields: datum, order: DESC}) {
      nodes {
        id
        naslov
        datum
        rubrika
        naslovnaSlika {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  }
  `)
  const blogPosts = data.allContentfulBlogPost.nodes
  return (
    <div className="blog-posts-all">
      <BlogPosts posts={blogPosts} />
    </div>
  )
}

export default AllBlogPosts
