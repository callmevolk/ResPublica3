import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const BlogPosts = ({posts=[]}) => {
  return (
    <div className="blog-posts">
      {
        posts.map(post => {
          const { id, naslov, datum, naslovnaSlika, rubrika, autor} = post
          const pathToImage = getImage(naslovnaSlika)
          let naslovKratki = naslov
          if (naslov.length >= 57) {
            naslovKratki = naslov.substring(0, 57) + '...'
          }
          
          let slug, slug2
          if (naslov.includes('đ')) {
            let naslov2 = naslov.replace('đ', 'd')
            slug = slugify(naslov2, { lower: true })
            slug2 = slugify(slug, {remove:  /[*+~.()'"!:@]/g}) 
          } else {
            slug = slugify(naslov, { lower: true })
            slug2 = slugify(slug, {remove:  /[*+~.()'"!:@]/g}) 
          }
          return (
            <Link key={id} to={`/${slug2}`} className="blog-box">
              <GatsbyImage
                image={pathToImage}
                alt={naslov}
                className="blog-img"
              />
              <div className="blog-text-container">
                <span className="blog-line"></span>
                <div className="blog-padding">
                  <p className="blog-font">{rubrika}</p>
                  <p className="datum blog-font">{datum}</p>
                  <h5 className="blog-title">{naslov}</h5>
                  <h6 className="blog-author">{autor}</h6>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default BlogPosts