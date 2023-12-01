'use client'

import Link from 'next/link'
import './index.css'
import Image from 'next/image'
import { useState } from 'react'
import Container from '../Container'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <Container>
        <div className="header-container">
          <div className="header-logo-container">
            <Link onClick={() => setIsOpen(false)} href="/" className="header-logo-link">
              <Image src="/logo-white.png" alt="logo.png" layout="fill" />
            </Link>
          </div>

          <div className="header-menu-container">
            <nav className="header-desktop-menu">
              <ul>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/">
                    Início
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/hospital">
                    Hospital
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/upa">
                    Upa
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/spa">
                    Spa
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/ubs">
                    Ubs
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/#sobre">
                    Sobre
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="header-mobile-menu">
              <div className="header-mobile-menu__change-state-icon" onClick={() => setIsOpen(true)}>
                <Image src={'/menu.svg'} alt="menu.svg" layout="fill" className="header-icon" />
              </div>
              {isOpen && (
                <div className="header-mobile-menu___expanded-content">
                  <div className="header-mobile-menu___expanded-content___wrapper">
                    <div className="header-mobile-menu___expanded-content___header">
                      <Container>
                        <div className="header-mobile-menu___expanded-content___header___wrapper">
                          <div className="header-mobile-menu___expanded-content___title">Menu</div>
                          <div className="header-mobile-menu___expanded-content___close-icon" onClick={() => setIsOpen(false)}>
                            <Image src={'/close.svg'} alt="close.svg" layout="fill" className="header-icon" />
                          </div>
                        </div>
                      </Container>
                    </div>
                    <nav className="header-mobile-menu___expanded-content___links">
                      <Container>
                        <ul>
                          <li>
                            <Link onClick={() => setIsOpen(false)} href="/">
                              Início
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setIsOpen(false)} href="/hospital">
                              Hospital
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setIsOpen(false)} href="/upa">
                              Upa
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setIsOpen(false)} href="/spa">
                              Spa
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setIsOpen(false)} href="/ubs">
                              Ubs
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setIsOpen(false)} href="/#sobre">
                              Sobre
                            </Link>
                          </li>
                        </ul>
                      </Container>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
