import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Posts() {
  const data = useStaticQuery(graphql`
    query {
      allYaml(sort: { fields: Meta___Date, order: DESC }) {
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
  `)

  return (
    <ul>
      {data.allYaml.edges.map(({ node }) => (
        <li key={`posts_${node.id}`}>{node.Meta.Date}</li>
      ))}
    </ul>
  )
}

export default Posts
