/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const moment = require("moment")

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type YamlMeta @infer {
      Date: Date
    }

    type Yaml implements Node @infer {
      Meta: YamlMeta
    }
  `

  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers, schema }) => {
  const supportedDateFormats = [
    "DD/MM/YY",
    "DD/MM/YYYY",
    "DD/MM/YY HH:mm",
    "DD/MM/YYYY HH:mm"
  ]

  createResolvers({
    YamlMeta: {
      Date: {
        resolve(source, args, context, info) {
          return info.originalResolver(
            {
              ...source,
              Date: moment(source.Date, supportedDateFormats).toISOString()
            },
            args,
            context,
            info
          )
        }
      }
    }
  })
}
