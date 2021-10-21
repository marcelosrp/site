import HomeTemplate from '@templates/Home'
import { request } from '@graphql/request'
import { GET_PROJECTS, GET_RESUME } from '@graphql/queries'

export default function Home({ projects, about }) {
  return <HomeTemplate projects={projects} about={about} />
}

export const getStaticProps = async () => {
  const projects = await request({
    query: GET_PROJECTS,
    variables: { limit: 50 }
  })

  const { about } = await request({
    query: GET_RESUME
  })

  return {
    revalidate: 5,
    props: {
      projects,
      about
    }
  }
}
