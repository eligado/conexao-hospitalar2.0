import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  )
}
