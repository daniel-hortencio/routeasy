import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient(
  'https://routeasy.com.br/content/graphql'
  // "https://test-frontity-wordpress.000webhostapp.com/graphql"
  // https://routeasy.com.br/content/wp-admin/admin.php?isQueryComposerOpen=true&page=graphiql-ide&query=I4VwpgTgngBAcmA7gRXNGBvAUDGAHAewGcAXIzHXGMAEwHMxzsqqA7AmsCllkgSxIAbMJR4wAxgVYkw00VQC%2B8pbiUKgA
)

const query = gql`
  query NewQuery {
    posts {
      edges {
        node {
          content
          categories {
            nodes {
              name
            }
          }
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default async function handler(req, res) {
  try {
    const posts_response: any = await client.request(query).then(res => {
      return res
    })

    const response = posts_response.posts.edges.map((post: any) => post.node)

    return res.status(200).json(response)
  } catch (err) {
    console.log('ERROR FROM GRAPHQL-REQUEST API CALL', err)
    return res.status(500).json(err)
  }
}
