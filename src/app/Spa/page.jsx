
import './index.css'

import Header from '@/components/Header';

export const metadata = {
    title: 'Conexão Hospitalar - Spa'
}

export default function Spa(){
    return (<>
            <div className="main">
                <div className='container'>
                    <h1 className='container-titulo'>Serviço de Pronto Atendimento - SPA</h1>
                    <p className='intro'>
                            As Unidades de Serviço de Pronto Atendimento (SPAs), 
                            geralmente compartilham objetivos semelhantes às UPAs ou outras instalações de atendimento de emergência.
                            Assim como as UPAs, as USPAs provavelmente têm a missão de fornecer atendimento médico imediato a pacientes 
                            que apresentam condições de urgência ou emergência, mas que não requerem cuidados hospitalares especializados.
                    </p>
                </div>
            </div>

            <div className='card'>
                    <h2 className='card-title'>SPAs</h2>
                    <p></p>
                    <div className='flip-card-horizon'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                    <h2>SPA1</h2>
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
                                    <h2>SPA2</h2>
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
                                    <h2>SPA3</h2>
                                </div>
                            
                                <div className='flip-card-back'>
                                    <h2>Teste Costa</h2>
                                    <p>Teste Paragrafo</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div></>
    );
    
}

