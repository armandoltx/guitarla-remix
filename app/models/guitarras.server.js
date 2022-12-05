export async function getGuitarras() {
  // console.log('desde loader') // se ve en el servidor
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const resultado = await respuesta.json()
  return resultado
}