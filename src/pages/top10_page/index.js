import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Posts about cycling">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/cycling_ascents/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {type: {eq: "bike"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`

export default BlogPage