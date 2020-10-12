import React, { Fragment } from "react"
import { graphql } from "gatsby"

import Posts from "../components/posts"

const IndexPage = ({ data }) => (
  <Fragment>
    <h3>Static query:</h3>
    <Posts />

    <h3>Page query:</h3>
    <ul>
      {data.allYaml.edges.map(({ node }) => (
        <li key={`index_${node.id}`}>{node.Meta.Date}</li>
      ))}
    </ul>
  </Fragment>
)

export default IndexPage

export const query = graphql`
  query {
    allYaml(
      filter: { Meta: { Category: { eq: "Gatsby" } } }
      sort: { fields: Meta___Date, order: DESC }
    ) {
      edges {
        node {
          id
          Meta {
            Date
            Category
          }
        }
      }
    }
  }
`
