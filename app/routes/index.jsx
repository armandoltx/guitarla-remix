import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPosts from '~/components/listado-posts'
import Curso from '~/components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'


export function meta() {}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  // como queremos hacer dos llamadas independientes, una a guitarras y otra a posts, usamos promisee all,
  // pq si hacemos una llamada y lugo la otra, la 2 no se realiza hasta q no termina la 1, y en este caso no necesitamos eso

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  // console.log(guitarras)
  // console.log(posts)

  // const guitarras = await getGuitarras()
  // console.log(guitarras)
  // const posts = await getPosts()
  // console.log(posts)
  // console.log("here here here")
  console.log(curso)

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {

  const {guitarras, posts, curso } = useLoaderData();
  // console.log(guitarras)
  // console.log(posts)
  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
            guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso.attributes}
      />

      <section className='contenedor'>
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index