module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `src/data`
      }
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: "Yaml"
      }
    }
  ]
}
