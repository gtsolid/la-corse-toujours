import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>Here i'm practising Shakuhachi in an Easter. The dog isn't mine.</p>
      <StaticImage
        alt="gtsolid"
        src="../images/IMG_3424.jpg"
      />
    </Layout>
  )
}

export default AboutPage