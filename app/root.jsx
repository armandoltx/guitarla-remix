
import { Meta, Links } from'@remix-run/react'
import styles from './styles/index.css'

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
  return(
    <Document>
      <h1>Hola Mundo</h1>
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
        {children}
      </body>
    </html>
  )
}