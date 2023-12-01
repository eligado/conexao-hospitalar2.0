import Image from 'next/image'

import './index.css'

export const metadata = {
  title: 'Conexão Hospitalar - UBS'
}

export default function Ubs() {
  return (
    <main className="main">
      <div className="container">
        <div className="container-wrapper">
          <h1 className="container-titulo">Unidade Básica de Saúde - UBS</h1>
          <p className="intro">As Unidades Básicas de Saúde (UBS) são uma parte fundamental dos sistemas de saúde em muitos países, especialmente em modelos de atenção primária à saúde, focando em serviços preventivos, promoção da saúde e tratamento de condições de saúde comuns. Elas são a porta de entrada para o sistema de saúde e são essenciais para garantir cuidados básicos e acessíveis à comunidade.</p>
        </div>
      </div>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/s50.png'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS S-50</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 08:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: Rua Gabriel Gonçalves - Aleixo</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/s51.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS S-51</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 08:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: R. Atagamita - Aleixo</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/montenegro.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS Dr. Luiz Montenegro</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 06:00h ÀS 18:00h</p>
            <p className="base-info texto-info">Endereço: R. Pico das Águas, 527 - Nossa Sra. das Graças</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/drrayol.JPG'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS - Dr José Rayol dos Santos</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 06:00h ÀS 20:30h e Sáb das 08:00 ÀS 20:30h</p>
            <p className="base-info texto-info">Endereço: Av. Constantino Nery, s/n - Flores, Manaus</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/O25.png'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS O-25</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 08:00h ÀS 18:00h</p>
            <p className="base-info texto-info">Endereço: R. Ambrósio Aires, 104 - São Jorge, Manaus</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/s05.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS S-05</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 08:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: R. Pico das Águas, 88 - São Geraldo</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/rayol.png'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS Rayol Dos Santos</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 06:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: R. Manoel Batista - São Jorge</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/n06.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS N-06</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 06:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: R. Bias Fortes - Cidade de Deus, Manaus - AM, 69099-009</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/n37.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS N-37</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 06:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: R. Joaquim Martins Santana - Amazonino Mendes - Novo Aleixo, Manaus - AM, 69099-068</p>
          </div>
        </div>
      </section>
      <section className="container-super">
        <div className="container-info">
          <div className="img-container">
            <Image src={'/l24.jpg'} fill style={{ objectFit: 'cover' }} alt="imagem de uma unidade de saúde" />
          </div>

          <div className="info">
            <h2 className="titulo-info texto-info">UBS L-24</h2>
            <h3 className="tipo-info ">UBS</h3>

            <p className="hor-info base-info texto-info">Horário de Funcionamento:</p>
            <p className="base-info texto-info">Seg a Sex das 06:00h ÀS 17:00h</p>
            <p className="base-info texto-info">Endereço: R. Nestor Paes - Zumbi 2, Manaus - AM, 69084-621</p>
          </div>
        </div>
      </section>
    </main>
  )
}
