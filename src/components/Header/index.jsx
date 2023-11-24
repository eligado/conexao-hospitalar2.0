'use client'


import Link from 'next/link';
import './index.css'

export default function Header(){
    return(
           <div className='header'>
            <div className="header_logo">
                    <Link  href="/">
                        <img src="logo.png" className="header_logoimg" alt="logo" />
                    </Link>
                    <span className="vazio">
                    </span>
                    <p className="texto-logo">Manaus - AM</p>
            </div>    
        </div> 
    );
}
