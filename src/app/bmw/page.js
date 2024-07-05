"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importar o CSS do carrossel
import Link from 'next/link';

export default function BMW() {

    const [info, setInfo] = useState([]); // Função para armazenar os dados da API

    // Consumo da API
    const fetchCars = async () => {
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/cars?make=bmw&limit=20", {
                headers: {
                    'X-Api-Key': 'FZsozPo3Bace9zvaIBgjlw==LfDtYf08sEnUuLC0'  // Chave API Ninjas
                }
            });

            const bmwCars = response.data.map(car => ({
                ...car,
                image: '/cars/bmw1.webp' // Substitui com uma imagem fixa de BMW
            }));

            setInfo(bmwCars);
            console.log(bmwCars); // Retorna no console os dados dentro da API
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    const Navigation = () => {
      const [mounted, setMounted] = useState(false);
  
      useEffect(() => {
        setMounted(true); // Indica que o componente está montado
      }, []);
  
      // Função para navegar para a página correspondente ao selecionar uma opção
      const handleChange = (event) => {
        const selectedMake = event.target.value;
        if (selectedMake === 'audi') {
          window.location.href = '/audi'; // Redireciona diretamente no lado do cliente
        } else if (selectedMake === 'bmw') {
          window.location.href = '/bmw'; // Redireciona diretamente no lado do cliente
        } else if (selectedMake === 'toyota') {
          window.location.href = '/toyota'; // Redireciona diretamente no lado do cliente
        }
      };
  
      if (!mounted) return null; // Se não estiver montado, retorna null
  
      return (
        <select defaultValue="" onChange={handleChange}>
          <option disabled value="">Marcas</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="toyota">Toyota</option>
        </select>
      );
    };
    
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
                <Navigation/>
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
        <section className="box-2">
          <h2>NOSSOS CARROS BMW</h2>
          <section className="news">
            {info.map((item, index) => (
              <figure key={index}>
                <img className='favorite-light' src='/favorite-light.png' alt="favorite icon"/>
                <img className='image-list' src={item.image} alt={`${item.make} ${item.model}`} />
                <figcaption>{`${item.make} ${item.model} (${item.year})`}</figcaption>
                <p>Classe: {item.class}</p>
                <p>Combustível: {item.fuel_type}</p>
                <p>Transmissão: {item.transmission}</p>
                <p>MPG Cidade: {item.city_mpg}</p>
                <p>MPG Estrada: {item.highway_mpg}</p>
                <p>Deslocamento: {item.displacement}</p>
                <p>Cilindros: {item.cylinders}</p>
                <p>Combinação MPG: {item.combination_mpg}</p>
                <p>Direção: {item.drive}</p>
                <Link href={`/car/${item.model}`} passHref>
                  <button>Ver detalhes</button>
                </Link>
              </figure>
            ))}
          </section>
          <button>Ver mais</button>
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
