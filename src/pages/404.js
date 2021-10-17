import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Greška" description="Stranica nije pronađena" currentUrl="https://www.gdcrespublica.ba" image_url="https://gdcrespublica.ba/static/18c1d12acf96ed4d1c1a396ec0b0941f/d41bd/slika-1.png" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Stranica nije pronađena</h3>
        </section>
      </main>
    </Layout>
  )
}

export default ErrorPage
