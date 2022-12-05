import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

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
  console.log(guitarra)

  return (
    <div>
      $guitarraUrl
    </div>
  );
};

export default Guitarra;