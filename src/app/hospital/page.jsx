import Image from "next/image";

import "./index.css";

export const metadata = {
  title: "Conexão Hospitalar - HOSPITAL",
};

export default function hospital() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <h1 className="container-titulo">Hospital e Pronto Socorro</h1>
          <p className="intro">
            Os HPS (Hospital e Pronto Socorro) são instituições dedicadas ao
            cuidado da saúde, oferencendo atendimento médico de emergência e
            urgência, internação, cirurgias e diversos serviços especializados.
            Tem como finalidade proporcionar cuidados de saúde de qualidade,
            diagnosticar e tratar doenças, além de prestar assistências
            imediatas em casos de urgência e emergência.
          </p>
        </div>
      </div>

      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/28.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Hospital e Pronto Socorro 28 de Agosto</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
             Endereço: Av. Mário Ypiranga, 1581 - Adrianópolis, Manaus - AM, 69057-000
            </p>
          </div>
        </div>
      </div>
      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/lucio.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Hospital e Pronto Socorro Dr. João Lúcio Pereira Machado</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
             Endereço: Av. Cosme Ferreira, 3937 - Coroado, Manaus - AM
            </p>
          </div>
        </div>
      </div>
      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/nilton.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Hospital Nilton Lins</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
                Endereço: Av. Prof. Nilton Lins, 3259 - Flores, Manaus - AM, 69058-580
            </p>
          </div>
        </div>
      </div>
      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/getulio.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Hospital Universitário Getúlio Vargas</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
            R. Tomas de Vila Nova, 300 - Centro, Manaus - AM, 69020-170
            </p>
          </div>
        </div>
      </div>
      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/adriano.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Fundação Hospital Adriano Jorge</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
             Endereço: Av. Carvalho Leal, 1778 - Cachoeirinha, Manaus - AM, 69065-001
            </p>
          </div>
        </div>
      </div>
      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/hosoeste.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Hospital e Pronto Socorro da Criança - Zona Oeste</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
             Endereço: Av. Brasil, 989 - Compensa I, Manaus - AM, 69083-000
            </p>
          </div>
        </div>
      </div>
      <div className="container-super">
        <div className="container-info">
          <Image
            src={"/hemoan.jpg"}
            width={500}
            height={550}
            className="img-container"
            priority={true}
            alt="imagem de uma unidade de saúde"
          />

          <div className="info">
            <h2 className="titulo-info texto-info">Hemoam Hospital</h2>
            <h3 className="tipo-info ">Hospital</h3>

            <p className="hor-info base-info texto-info">
             Horário de Funcionamento:
            </p>
            <p className="base-info texto-info">Aberto 24 horas</p>
            <p className="base-info texto-info">
             Endereço: Av. Pedro Teixeira - Dom Pedro, Manaus - AM, 69040-000
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
