import dynamic from 'next/dynamic'
import Image from 'next/image'

import Header from '@/components/Header';
import Container from '@/components/Container';

import './home.css'

const Mapa = dynamic(() => import("@/components/Mapa"), { ssr: false });

export const metadata = {
    title: 'Conexão Hospitalar'
}

export default function Page() {
    return (
        <div className="main">
                <div className='projeto'>
                    <div className='projeto-sombra'>
                        <h1 className='titulo-projeto'>Conexão Hospitalar</h1>
                    </div>
                </div>

            <Container>
                <div className='sobre-container' id='sobre'>
                    <div className='left-container'>
                        <h2 className='titulo-container'>Sobre o projeto</h2>
                        <p className='texto-container'>O site oferece uma visão abrangente das diversas unidades de saúde disponíveis na região, destacando suas especialidades,
                        infraestrutura e equipe médica. A ideia central é fornecer informações detalhadas para que os pacientes possam tomar
                        decisões informadas sobre para onde devem direcionar suas necessidades de saúde específicas.</p>
                    </div>
                    <div className='right-container'>
                        <Image src={'/28deagosto.jpg'} width={500} height={550} className='img-container' alt='imagem de uma unidade de saúde'/>
                    </div>
                </div>
            </Container>

            <Container>
                <div className='mapa'>
                    <Mapa />
                </div>
            </Container>
        </div>
    );
}