import React from 'react'
import Slider from "react-slick"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const HeaderSlider = () => {
  const data = useStaticQuery(graphql` {
    allFile(filter: {sourceInstanceName: {eq: "backgrounds"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        name
      }
    }
  }
  `)

  const images = data.allFile.nodes

  return (
    <Slider 
    dots={false}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={2000}
    className="hero-slider"
    >
      {
        images.map((image, index) => {
          let final = getImage(image)

          return (
            <div className="hero-slide" key={index}>
              <GatsbyImage
                image={final}
                alt={image.name}
                imgClassName="hero-image"
                className="hero-image-2"
              />
              <div className="hero-text-container">
                <div className="hero-text">
                  <h1>Res Publica</h1>
                  <h4>Građanski Demokratski Centar</h4>
                </div>
              </div>
            </div>
          )
        })
      }
    </Slider>
  )
}

export default HeaderSlider
