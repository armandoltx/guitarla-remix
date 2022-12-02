
import { Meta } from'@remix-run/react'

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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}