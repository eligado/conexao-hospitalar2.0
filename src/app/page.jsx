import dynamic from 'next/dynamic'
import Image from 'next/image'

import Container from '@/components/Container'

import './page.css'
import prisma from '../../lib/prisma'

const Mapa = dynamic(() => import('@/components/Mapa'), { ssr: false })

export const metadata = {
  title: 'Conexão Hospitalar'
}

export default async function Page() {
  let error = false
  let locationsMapped = []

  const locations = await prisma.locations.findMany()

  try {
    locationsMapped = locations.map((location) => ({ ...location, lat: location.lat.toNumber(), lng: location.lng.toNumber() }))
  } catch (error) {
    error = true
  }

  return (
    <div className="main">
      <section className="project">
        <div className="project-shadow">
          <div className="project-title">
            <h1>Conexão Hospitalar</h1>
          </div>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-section-wrapper">
          <div className="about-left-container">
            <h2 className="about-title-container">Sobre o Projeto</h2>
            <p className="about-description-container">O site oferece uma visão abrangente das diversas unidades de saúde disponíveis na região, destacando suas especialidades, infraestrutura e equipe médica. A ideia central é fornecer informações detalhadas para que os pacientes possam tomar decisões informadas sobre para onde devem direcionar suas necessidades de saúde específicas.</p>
          </div>
          <div className="about-image-container">
            <Image src={'/28.jpg'} fill style={{ objectFit: 'cover' }} className="about-image" alt="imagem de uma unidade de saúde" />
          </div>
        </div>
      </section>

      <section className="map-section" id="mapa">
        <div className="map-top-container">
          <h2 className="map-title-container">Mapa</h2>
          <p className="map-description-container">Explore nosso mapa para encontrar hospitais e unidades de saúde na região, obtendo informações detalhadas sobre especialidades e equipes médicas. Tome decisões informadas sobre sua saúde com facilidade.</p>
        </div>
        <div className="map-section___map-container">{error ? <>Erro ao carregar o mapa.</> : <Mapa locations={locationsMapped} />}</div>
      </section>
    </div>
  )
}
