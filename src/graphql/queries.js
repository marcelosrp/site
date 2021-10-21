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

export const GET_RESUME = gql`
  query GET_RESUME {
    about {
      resume
    }
  }
`
