import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image_url }) => {
  const {site} = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
      }
    }
  }
  `)
  const { siteTitle, siteDesc } = site.siteMetadata
  return (
    <Helmet>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDesc} />
      <meta property="og:title" content={`${title} | ${siteTitle}`}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" itemProp="image" content='https://respublica.netlify.app/static/18c1d12acf96ed4d1c1a396ec0b0941f/ae1c8/slika-1.png'/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={"https://respublica.netlify.app"}/>
    </Helmet>
  )
}

export default SEO
