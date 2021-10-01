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
        naslovnaSlika {
          gatsbyImageData(
            height: 220
            layout: CONSTRAINED
            width: 300
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
  `)
  const blogPosts = data.allContentfulBlogPost.nodes
  return (
    <div>
      <BlogPosts posts={blogPosts} />
    </div>
  )
}

export default AllBlogPosts
