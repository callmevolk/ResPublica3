import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import SEO from '../components/SEO'


const Contact = () => {
  const data = useStaticQuery(graphql`
  {
    staticMap {
      childFile {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
  `)

  const final = getImage(data.staticMap.childFile.childImageSharp)
  return (
    <Layout>
      <SEO title="Kontakt" description="Naše kontakt informacije" image_url="https://gdcrespublica.ba/static/18c1d12acf96ed4d1c1a396ec0b0941f/d41bd/slika-1.png" />
      <Header
        title="Kontaktirajte nas"
        description="Kako nas možete pronaći"
      >
        <StaticImage 
          src="../assets/images/kontaktirajte.jpg"
          alt="Kontakt informacije"
          className="hero-image"
          layout="fullWidth"
          placeholder="blurred"
        />
      </Header>
      <main className="page">
        <section className="contact-page">
          <article className="contact-text">
          <h2>Kontaktirajte nas</h2>
            <p><FontAwesomeIcon icon={faGoogle} className="contact-icon"/>nikola_bogicevic@hotmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} className="contact-icon"/>+38765383412</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon"/>Steve Stevanovića bb Prnjavor</p>
            <p><FontAwesomeIcon icon={faFacebook} className="contact-icon"/>facebook.com/respublicaanalytics</p>
          </article>
          <GatsbyImage
            image={final}
            alt=""
            className="about-img contact-img"
          />
        </section>
      </main>
    </Layout>
  )
}

export default Contact
