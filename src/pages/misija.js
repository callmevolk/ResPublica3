import React from 'react'
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../components/Header'
import OurTeam from '../components/OurTeam'
import SEO from '../components/SEO'

const About = () => {
  return (
    <Layout>
    <SEO title="Misija" description="O nama" currentUrl="https://www.gdcrespublica.ba/misija/" image_url="https://gdcrespublica.ba/static/18c1d12acf96ed4d1c1a396ec0b0941f/d41bd/slika-1.png" />
      <Header
        title="Naša misija"
        description="Par riječi o nama"
      >
        <StaticImage 
          src="../assets/images/misija.jpg"
          alt="O nama, naša misija"
          className="hero-image-small"
          layout="fullWidth"
          placeholder="blurred"
        />
      </Header>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Naša misija</h2>
            <p> izgradnja demokratskog građanskog društva zasnovanog na slobodama, građanskim pravima i poštovanju zakona i ustava;</p>
            <p>unapređivanje vladavine prava i funkcionisanja odgovorne vlasti;</p>
            <p>ostvarivanju principa decentralizacije i aktivnosti građana na lokalnom nivou odlučivanja;</p>
            <p>izgradnja i razvoj civilnog društva;</p>
            <p>afirmacija i podsticanje učešća građana u razvoju lokalne zajednice i društva u cjelini;</p>
            <p>izgradnja i afirmisanje osjećaja odgovornosti pojedinaca u vršenju javnih poslova;</p>
            <p>afirmacija uloge žena i mladih u društvenoj zajednici;</p>
            <p>zaštita životne sredine;</p>
          </article>
          <article>
            <p>zaštita interesa potrošača i korisnika usluga;</p>
            <p>zaštita bolesnih, hendikepiranih osoba i lica starije dobi kojima je potrebna društvena pomoć;</p>
            <p>borba protiv svih oblika diskriminacije po bilo kojem osnovu;</p>
            <p>bavljenje pitanjima filozofije, sociologije, političke teorije i prakse;</p>
            <p>organizovanje humanitarnih akcija i manifestacija;</p>
            <p>ostvarivanje saradnje sa udruženjima, društvima i drugim organizacijama sa sličnim ciljevima;</p>
            <p>unapređivanje informisanja i izgradnje sistema informacija u procesu donošenja društvenih odluka;</p>
            <p><Link to="/kontakt" className="kontakt-link">Kontaktirajte nas</Link></p>
          </article>
        </section>
        <section className="tim">
          <h2 className="team-text">Naš tim</h2>
          <p>U nastavku možete vidjeti informacije o članovima rukovodstva organizacije</p>
          <OurTeam />
        </section>
      </main>
    </Layout>
  )
}

export default About
