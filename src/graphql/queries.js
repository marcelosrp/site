import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query getProjects($limit: IntType) {
    allProjects(first: $limit) {
      id
      title
      url
      datePublish
      thumb {
        url
      }
    }
  }
`
