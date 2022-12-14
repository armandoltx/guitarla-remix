import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'

export function meta({data}) {
  // data esta disponible pq biene del loader
  // console.log(data)
  if(!data) {
    return {
        title: 'GuitarLA - Entrada No encontrada',
        description: `Guitarras, venta de guitarras, entrada no encontrada`
    }
  }
  return(
     {
        charset: 'utf-8',
        title: `GuitarLa - ${data.data[0].attributes.titulo}`, // el 1 data es del loader, el 2 viene de strapi
        description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`
     }
  )
}

export async function loader({params}) {
    const { postUrl } = params
    // console.log(postUrl)
    const post = await getPost(postUrl)
    // console.log(post)

    if(post.data.length === 0) {
        throw new Response('', {
          status: 404,
          statusText: 'Entrada no encontrada'
        })
    }
    return post
}

const Post = () => {
  const post = useLoaderData()
  // console.log(post) lo esnsena en la consola del browser
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post;
