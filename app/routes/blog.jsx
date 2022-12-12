import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import ListadoPosts from '~/components/listado-posts'
import styles from '~/styles/blog.css'

export function meta() {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'Venta de guitarras, blog de música'
  }
}

export async function loader() {
  const posts = await getPosts()
  // console.log(posts)
  return posts.data
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Blog = () => {
  const posts = useLoaderData()
  // console.log('desde blog')
  // console.log(posts)

  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  );
};

export default Blog;