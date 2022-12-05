import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}) {
  //usamos el loader para traer la info de la guitarra
  // console.log(request)
  // console.log(params)

  const { guitarraUrl } = params

  const guitarra = await getGuitarra(guitarraUrl)
  // console.log(guitarra)

  return guitarra
}

const Guitarra = () => {
  const guitarra = useLoaderData() // usamos el useLoaderData para traerl los datos del servidor al front end
  // console.log(guitarra)
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <div className='guitarra'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
      </div>
    </div>
  );
};

export default Guitarra;