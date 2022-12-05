export async function getGuitarras() {
  // console.log('desde loader') // se ve en el servidor
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const resultado = await respuesta.json()
  return resultado
}

export async function getGuitarra(url) {
  // para filtrat por el atributo q sea, se pasa la palabra filters y un array y dentor del array se agrega el atributo por el q se filtra
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const resultado = await respuesta.json()
  return resultado
}