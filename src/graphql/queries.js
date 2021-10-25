import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query getProjects($limit: IntType) {
    allProjects(first: $limit, orderBy: _createdAt_ASC) {
      id
      title
      slug
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

export const GET_WORK_BY_SLUG = gql`
  query getWorkBySlug($slug: String) {
    allProjects(filter: { slug: { eq: $slug } }) {
      id
      title
      url
      description
      scope
      technology
      gallery {
        alt
        url
      }
    }
  }
`
