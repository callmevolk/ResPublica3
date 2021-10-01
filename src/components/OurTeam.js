import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Member from './Member'

const OurTeam = () => {
  const data = useStaticQuery(graphql` {
    allContentfulOurTeam(sort: {fields: createdAt}) {
      nodes {
        ime
        kratkiOpis
        facebook
        instagram
        zanimanje
        slikaOsobe {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
  `)

  const members = data.allContentfulOurTeam.nodes

  return (
    <section className="team-container">
      {members.map(member => {
        let final = getImage(member.slikaOsobe)
        let { ime, kratkiOpis, zanimanje, facebook, instagram } = member
        return (
          <React.Fragment key={ime}>
            <Member
              image={final}
              name={ime}
              description={zanimanje}
              memberTitle={ime}
              memberText={kratkiOpis}
              facebook={facebook}
              instagram={instagram}
            />
          </React.Fragment>
        )
      })}
    </section>
  )
}

export default OurTeam
