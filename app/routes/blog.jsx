import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import Post from '~/components/post'
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
  console.log('desde blog')
  // console.log(posts)

  return (
    <main className="contenedor">
      <h2 className="heading">Bog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  );
};

export default Blog;