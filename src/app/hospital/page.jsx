
import './index.css'

import Header from '@/components/Header';

export const metadata = {
    title: 'Conexão Hospitalar - hospital'
}

export default function hospital(){
    return (
        <div className="App">
    
            <div className="main">
                <div className='container'>
                    <h1 className='container-titulo'>Hospital e Pronto Socorro</h1>
                    <p className='intro'>
                    Os HPS (Hospital e Pronto Socorro) são instituições dedicadas ao cuidado da saúde, oferencendo atendimento médico de emergência e urgência, internação,
                     cirurgias e diversos serviços especializados. Tem como finalidade proporcionar cuidados de saúde de qualidade, diagnosticar e tratar doenças, além de 
                     prestar assistências imediatas em casos de urgência e emergência.
                    </p>
                </div>
            </div>
            
                <div className='card'>
                    <h2 className='card-title'>Hospitais</h2>
                    <p></p>
                    <div className='flip-card-horizon'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                    <h2>HOSPITAL1</h2>
                                </div>
                            
                                <div className='flip-card-back'>
                                    <h2>Teste Costa</h2>
                                    <p>Teste Paragrafo</p>
                                </div>
                            </div>
                        </div>

                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                    <h2>HOSPITAL2</h2>
                                </div>
                            
                                <div className='flip-card-back'>
                                    <h2>Teste Costa</h2>
                                    <p>Teste Paragrafo</p>
                                </div>
                            </div>
                        </div>

                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                    <h2>HOSPITAL3</h2>
                                </div>
                            
                                <div className='flip-card-back'>
                                    <h2>Teste Costa</h2>
                                    <p>Teste Paragrafo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
    
}

