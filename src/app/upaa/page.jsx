import Image from 'next/image'

import './index.css'

export const metadata = {
  title: 'Conexão Hospitalar - UPA'
}

export default function upa() {
  return (
    <main className="main">
      <div className="container">
        <div className="container-wrapper">
          <h1 className="container-titulo">Unidade de Pronto Atendimento - UPA</h1>
          <p className="intro">As Unidades de Pronto Atendimento (UPAs) são uma parte importante do sistema de saúde em muitos países, destinadas a fornecer atendimento médico urgente e emergencial para casos que não são graves o suficiente para justificar uma visita ao hospital.</p>
        </div>
      </div>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/sales.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UPA 24h - Campos Sales</h2>
            <h3 className="tipo-info ">UPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Endereço: Av. Dona Otília, 649 - Tarumã, Manaus - AM, 69021-005</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/upanova.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">Unidade de Pronto Atendimento - UPA Cidade Nova V</h2>
            <h3 className="tipo-info ">UPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">Av. Camapuã, 1424 - N - S De Fatima, Manaus - AM, 69099-028</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/distrito.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UPA Distrito</h2>
            <h3 className="tipo-info ">UPA</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Segunda a Sexta: 07:00 às 19:00</p>
            <p className="base-info texto-info">Sábado: Fechado</p>
            <p className="base-info texto-info">Domingo: Fechado</p>
            <p className="base-info texto-info">Av. Buriti, 3727 - Distrito Industrial I, Manaus - AM, 69075-510</p>
          </div>
        </div>
      </section>
    </main>
  )
}
