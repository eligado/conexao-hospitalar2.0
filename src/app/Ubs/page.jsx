
import './index.css'

import Header from '@/components/Header';

export const metadata = {
    title: 'Conexão Hospitalar - ubs'
}

export default function Ubs(){
    return (
        <div className="App">   
            <div className="main">
                <div className='container'>
                    <h1 className='container-titulo'>Unidade Básica de Saúde - UBS</h1>
                    <p className='intro'>
                    As Unidades Básicas de Saúde (UBS) são uma parte fundamental dos sistemas de saúde em muitos países, 
                    especialmente em modelos de atenção primária à saúde, focando em serviços preventivos, promoção da saúde 
                    e tratamento de condições de saúde comuns. Elas são a porta de entrada para o sistema de saúde e são essenciais para garantir cuidados básicos e acessíveis à comunidade.
                    </p>
                </div>
            </div>

            <div className='card'>
                    <h2 className='card-title'>UBS</h2>
                    <p></p>
                    <div className='flip-card-horizon'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                    <h2>UBS1</h2>
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
                                    <h2>UBS2</h2>
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
                                    <h2>UBS3</h2>
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
