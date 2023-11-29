import './global.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <div className="app">
        <Header />   
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
