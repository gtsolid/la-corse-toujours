import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Mission">
      <p>La Corse Toujours aims to bring a little of Corsican flavor in our daily life!</p>
      <StaticImage
        alt="Corsica map"
        src="../images/corsica-tourist-map - low.jpg"
      />
    </Layout>
  )
}

export default IndexPage