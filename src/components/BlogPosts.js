import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const BlogPosts = ({posts=[]}) => {
  return (
    <div className="blog-posts">
      {
        posts.map(post => {
          const { id, naslov, datum, naslovnaSlika} = post
          const pathToImage = getImage(naslovnaSlika)
          let naslovKratki = naslov
          if (naslov.length >= 20) {
            naslovKratki = naslov.substring(0, 20) + '...'
          }
          if (naslov.includes('dj')) {
            naslov.replace('dj', 'd')
          }

          const slug = slugify(naslov, { lower:true})
          const slug2 = slugify(slug, {remove: /[*+~.()'"!:@]/g})
          return (
            <Link key={id} to={`/${slug2}`} className="blog-box">
              <GatsbyImage
                image={pathToImage}
                alt={naslov}
                className="blog-img"
              />
              <h5 className="blog-title">{naslovKratki}</h5>
              <p className="datum">{datum}</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default BlogPosts