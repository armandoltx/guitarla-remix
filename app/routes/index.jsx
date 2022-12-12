import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import stylesGuitarras from '~/styles/guitarras.css'


export function meta() {}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    }
  ]
}

export async function loader() {
  // como queremos hacer dos llamadas independientes, una a guitarras y otra a posts, usamos promisee all,
  // pq si hacemos una llamada y lugo la otra, la 2 no se realiza hasta q no termina la 1, y en este caso no necesitamos eso

  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])

  // console.log(guitarras)
  // console.log(posts)

  // const guitarras = await getGuitarras()
  // console.log(guitarras)
  // const posts = await getPosts()
  // console.log(posts)

  return {
    guitarras: guitarras.data,
    posts: posts.data
  }
}

const Index = () => {
  const { guitarras, posts } = useLoaderData()
  // console.log(guitarras)
  // console.log(posts)


  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />

      </main>
    </>
  );
};

export default Index;