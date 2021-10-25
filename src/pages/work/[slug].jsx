import { request } from '@graphql/request'
import { GET_PROJECTS, GET_WORK_BY_SLUG } from '@graphql/queries'
import { useRouter } from 'next/dist/client/router'
import WorkTemplate from '@templates/Work'

export default function Work({ work }) {
  const router = useRouter()

  // retorna um loading ou qualquer cois enquanto tá sendo criado
  if (router.isFallback) return null

  return <WorkTemplate work={work} />
}

export async function getStaticPaths() {
  const projects = await request({
    query: GET_PROJECTS,
    variables: { limit: 3 }
  })

  const paths = projects.allProjects.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const work = await request({
    query: GET_WORK_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!work) return { notFound: true }

  return {
    revalidate: 5,
    props: {
      work
    }
  }
}
