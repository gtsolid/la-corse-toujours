import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Top10Page = () => {
  return (
    <Layout pageTitle="Top10">
      <p>I like to see the world like a kind of ranking</p>
      <p>Here i'm practising Shakuhachi in an Easter. The dog isn't mine.</p>
      <StaticImage
        alt="gtsolid"
        src="../images/IMG_3424.jpg"
      />
    </Layout>
  )
}

export default Top10Page