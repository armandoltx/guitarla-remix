import { getGuitarras } from '~/models/guitarras.server'
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
  console.log(guitarras)
  return {}
}
const Tienda = () => {
  return (
    <div>

    </div>
  );
};

export default Tienda;