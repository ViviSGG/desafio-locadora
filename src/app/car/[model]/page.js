"use client";
import Link from 'next/link';

const Navigation = () => {
  
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

  return (
    <select defaultValue="" onChange={handleChange}>
      <option disabled value="">Marcas</option>
      <option value="audi">Audi</option>
      <option value="bmw">BMW</option>
      <option value="toyota">Toyota</option>
    </select>
  );
};

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
        <section className='details-box'>
            <section className='details-collection-img'>
                <div className='details-div1'>
                    <img src="/cars/toyota1.jpg" alt="car" className="carro toyota"/>
                    <img src="/cars/toyota1.jpg" alt="car" className="carro toyota"/>
                </div>
                <div className='details-div2'>
                  <img src="/cars/toyota1.jpg" alt="car" className="carro toyota"/>
                </div>
            </section>
            <section className='details-description'>
              <div>
                <h3>Car touring (1993)</h3>
                <img src='/favorite.png' alt="favorite icon" id='favorite-reservation' />
              </div>
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
              <section className='details-action'>
                    <Link href="/reserva">
                      <button>Fazer reserva</button>
                    </Link>
              </section>
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
