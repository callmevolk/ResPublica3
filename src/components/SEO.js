import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image_url, currentUrl }) => {
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
      <meta name="description" content={description || siteDesc}/>
      <meta property="og:title" content={`${title} | ${siteTitle}`}/>
      <meta property="og:description" content={description || siteDesc}/>
      <meta property="og:image" itemProp="image" content={image_url}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={currentUrl}/>
    </Helmet>
  )
}

export default SEO
