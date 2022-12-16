import { useState } from 'react'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from'@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  // en el momento q la exportas estara disponible y se injecta automaticamente en la ruta
  return(
     {
        charset: 'utf-8',
        title: 'GuitarLa - Remix',
        viewport: "width=device-width,initail-scale=1"
     }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin : "true"
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  const [carrito, setCarrito] = useState([])
  const agregarCarrito = guitarra => {
    // console.log("agregando...", guitarra)
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // este metodo retorna true o false
      // console.log("ese elemento ya existe ")
      // iteramos sobre el arreglo e identificar el elemento duplicado
      const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id) {
          // reescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad
          // si queremos sumar la cantidad nueva a la que habia:
          // guitarraState.cantidad += guitarra.cantidad
        }
        return guitarraState
      })
      // agregar al carrito
      setCarrito(carritoActualizado)

    } else {
      // es un registro nuevo, agregamos al carrito
      setCarrito([...carrito, guitarra])
    }
  }

  return(
    <Document>
      <Outlet
        context={{ // sera siempre un objeto
          agregarCarrito
        }}
      />
    </Document>
  )
}

function Document({children}) {
  return(
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/** Manejo de errores */
export function CatchBoundary() {
  const error = useCatch()
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}