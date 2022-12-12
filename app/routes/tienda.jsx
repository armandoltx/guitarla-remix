import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import styles from '~/styles/guitarras.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  // en remix no hay q asociarlo, solo exportandolo sabe q es un loader
  // loader se utiliza cuadno el componente carga
  // Action es cuando envias datos desde un formulario
  // console.log('desde loader') // se ve en el servidor
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  // const resultado = await respuesta.json()
  // console.log(resultado)
  // console.log(process.env.API_URL)
  const guitarras = await getGuitarras()
  // console.log(guitarras)
  // return guitarras pq guitaras trae tb una cosa q se llama meta q no la necesitamos
  return guitarras.data
}
const Tienda = () => {
  const guitarras = useLoaderData()

  // console.log(guitarras)
  return (
    <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />

      </main>
  );
};

export default Tienda;