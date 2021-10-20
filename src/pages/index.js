import HomeTemplate from '@templates/Home'
import { request } from '@graphql/request'
import { GET_PROJECTS } from '@graphql/queries'

export default function Home({ projects }) {
  return <HomeTemplate projects={projects} />
}

export const getStaticProps = async () => {
  const projects = await request({
    query: GET_PROJECTS,
    variables: { limit: 50 }
  })

  return {
    revalidate: 5,
    props: {
      projects
    }
  }
}
