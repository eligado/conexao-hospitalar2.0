import Image from 'next/image'

import './index.css'

export const metadata = {
  title: 'Conexão Hospitalar - SPA'
}

export default function Spa() {
  return (
    <main className="main">
      <section className="container">
        <div className="container-wrapper">
          <h1 className="container-titulo">Serviço de Pronto Atendimento - SPA</h1>
          <p className="intro">As Unidades de Serviço de Pronto Atendimento (SPAs), geralmente compartilham objetivos semelhantes às UPAs ou outras instalações de atendimento de emergência. Assim como as UPAs, as USPAs provavelmente têm a missão de fornecer atendimento médico imediato a pacientes que apresentam condições de urgência ou emergência, mas que não requerem cuidados hospitalares especializados.</p>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/coroado2.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">Serviço de Pronto Atendimento - SPA Coroado</h2>
            <h3 className="tipo-info ">SPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Av. Beira Mar, S/N - Coroado, Manaus - AM, 69080-030</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/alvorada.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">SPA Alvorada</h2>
            <h3 className="tipo-info ">SPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">R. Loris Cordovil, s/n - Alvorada, Manaus - AM, 69043-010</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/raimundo.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">Serviço De Pronto Atendimento - SPA São Raimundo</h2>
            <h3 className="tipo-info ">SPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Praça Ismael Benígno, 155 - São Raimundo, Manaus - AM, 69027-320</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/danilo.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">SPA e Policlínica - Danilo Corrêa - CIDADE NOVA</h2>
            <h3 className="tipo-info ">SPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Av. Noel Nutels, s/n - Cj. Cidade Nova I, Manaus - AM, 69096-000</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/galileia.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">SPA do GALILEIA</h2>
            <h3 className="tipo-info ">SPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Av. Samaúma - Cidade Nova, Manaus - AM, 69093-132</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/redencao.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">SPA Redenção</h2>
            <h3 className="tipo-info ">SPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Endereço: R. Maracanã, 13 - Redenção, Manaus - AM, 69047-481</p>
          </div>
        </div>
      </section>
    </main>
  )
}
