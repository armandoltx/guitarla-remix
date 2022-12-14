import { Link } from '@remix-run/react'

const Guitarra = ({guitarra}) => {
  // console.log(guitarra)
  const { descripcion, imagen, precio, url, nombre } = guitarra
  // console.log(imagen.data.attributes.formats.medium.url) // hemos hecho console.log de cadfa uno de ellos para llegar a lo q queriamos
  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;