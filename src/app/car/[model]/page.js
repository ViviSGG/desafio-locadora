"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CarDetails() {
  return (
    <>
      <header>
        <section>
          <figure className='logo'>
            <img src="/car.png" alt="car" className="icon-car"/>
            <figcaption>Loc Web</figcaption>
          </figure>
          <nav>
            <ul>
              <li>
                <Link href="/">Página inicial</Link>
              </li>
              <li>
                <select defaultValue="">
                  <option disabled value="">Marcas</option>
                  <option>Audi</option>
                  <option>BMW</option>
                  <option>Toyota</option>
                </select>
              </li>
              <li>
                <a href="">Sobre nós</a>
              </li>
              <li>
                <a href=""><img src="/favorite.png" alt="favorito" id="icon-favorite"/></a>
              </li>
              <li>
                <Link href="/reserva"><img src="/purchase.png" alt="carrinho" id="icon-purchase"/></Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <main>
        <section>
            <section>
                <div>
                    <img src="/cars/toyota1.jpg" alt="car" className="carro toyota"/>
                    <img src="/cars/toyota1.jpg" alt="car" className="carro toyota"/>
                </div>
                <img src="/cars/toyota1.jpg" alt="car" className="carro toyota"/>
            </section>
            <h3>bmw 525i touring (1993)</h3>
            <figure>
                {/* <figcaption>bmw 525i touring (1993)</figcaption> */}
                <p>Classe: lorem</p>
                <p>Combustível: lorem</p>
                <p>Transmissão: lorem</p>
                <p>MPG Cidade: lorem</p>
                <p>MPG Estrada: lorem</p>
                <p>Deslocamento: lorem</p>
                <p>Cilindros: lorem</p>
                <p>Combinação MPG: lorem</p>
                <p>Direção: lorem</p>
            </figure>
            <section>
                <button>Fazer reserva</button>
                <img src='/favorite.png' alt="favorite icon" id='favorite-reservation'/>
            </section>
        </section>
      </main>
      <footer>
        <section>
          <figure>
            <img src="/car.png" alt="logo" className="icon-car"/>
          </figure>
          <p>@ 2024 - Lívia Gomes | Desenvolvedora Front-End e UI Design</p>
          <nav className='networks'>
            <ul>
                <li>
                  <a href="https://www.linkedin.com/in/l%C3%ADvia-gomes-6a5771230/" target='_blank'><img src="/linkedin.png" alt="linkedin"/></a>
                </li>
                <li>
                  <a href="https://github.com/ViviSGG" target='_blank'><img src="/github.png" alt="github"/></a>
                </li>
              </ul>
          </nav>
        </section>
      </footer>
    </>
  );
}
