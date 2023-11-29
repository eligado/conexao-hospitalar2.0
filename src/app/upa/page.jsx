
import './index.css'

import Header from '@/components/Header';

export const metadata = {
    title: 'Conexão Hospitalar - upa'
}

export default function upa(){
    return (
        <div className="App">
            <div className="main">
                <div className='container'>
                    <h1 className='container-titulo'>Unidade de Pronto Atendimento - UPA</h1>
                    <p className='intro'>
                        As Unidades de Pronto Atendimento (UPAs) são uma parte importante do sistema de saúde em muitos países, 
                        destinadas a fornecer atendimento médico urgente e emergencial para casos que não são graves o suficiente 
                        para justificar uma visita ao hospital.
                    </p>
                </div>
            </div>

            <div className='card'>
                    <h2 className='card-title'>UPAs</h2>
                    <p></p>
                    <div className='flip-card-horizon'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                    <h2>UPA1</h2>
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
                                    <h2>UPA2</h2>
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
                                    <h2>UPA3</h2>
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

