"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importar o CSS do carrossel
import Link from 'next/link';

export default function Home() {

  const [info, setInfo] = useState([]); // Função para armazenar os dados da API

  // Consumo da API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setInfo(response.data);
      console.log(response.data); // Retorna no console os dados dentro da API
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const car_list = [
    { src: '/cars/audi1.webp', title: 'Audi' },
    { src: '/cars/audi2.webp', title: 'Audi' },
    { src: '/cars/audi3.webp', title: 'Audi' },
    { src: '/cars/audi4.webp', title: 'Audi' },
    { src: '/cars/audi5.webp', title: 'Audi' },
    { src: '/cars/audi6.webp', title: 'Audi' },
    { src: '/cars/audi7.webp', title: 'Audi' },
    { src: '/cars/audi8.webp', title: 'Audi' },
    { src: '/cars/audi9.webp', title: 'Audi' },
    { src: '/cars/audi10.webp', title: 'Audi' },
    { src: '/cars/bmw1.webp', title: 'BMW' },
    { src: '/cars/bmw2.webp', title: 'BMW' },
    { src: '/cars/bmw3.webp', title: 'BMW' },
    { src: '/cars/bmw4.webp', title: 'BMW' },
    { src: '/cars/bmw5.webp', title: 'BMW' },
    { src: '/cars/bmw6.webp', title: 'BMW' },
    { src: '/cars/toyota1.jpg', title: 'Toyota' },
    { src: '/cars/toyota2.jpg', title: 'Toyota' },
    { src: '/cars/toyota3.jpg', title: 'Toyota' }
  ];

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
                <a href="">Página inicial</a>
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
                <Link href="reserva"><img src="/purchase.png" alt="carrinho" id="icon-purchase"/></Link>
              </li>
              
            </ul>
          </nav>
        </section>
      </header>
      <main>
        <section className="box-1">
          <h1>AS MELHORES MARCAS DISPONÍVEIS</h1>
          <Carousel infiniteLoop={true} autoPlay={true} className="my-custom-carousel">
            {car_list.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <img src={item.src} alt={item.title} /> 
              </div>
            ))}
          </Carousel>
        </section>

        <section className="box-2">
          <h2>NOSSOS CARROS</h2>
          <section className="news">
            {car_list.map((item, index) => (
              <figure key={index}>
                <img className='favorite-light' src='/favorite-light.png'/>
                <img className='image-list' src={item.src} alt={item.title} />
                <p>{item.title}</p>
                <Link href={`/car/${item.title.toLowerCase()}`} passHref>
                  <button>Saber mais</button>
                </Link>
              </figure>
            ))}
          </section>
          {/* <button>Ver mais</button> */}
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





















// "use client";
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importar o CSS do carrossel
// import Link from 'next/link';
// import { useRouter } from 'next/router'; // Importar useRouter do next/router

// export default function Home() {

//   const [info, setInfo] = useState([]); // Função para armazenar os dados da API

//   // Consumo da API
//   const fetchProducts = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     setInfo(response.data);
//     console.log(response.data); // Retorna no console os dados dentro da API
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const car_list = [
//     { src: '/cars/audi1.webp', title: 'Audi' },
//     { src: '/cars/audi2.webp', title: 'Audi' },
//     { src: '/cars/audi3.webp', title: 'Audi' },
//     { src: '/cars/audi4.webp', title: 'Audi' },
//     { src: '/cars/audi5.webp', title: 'Audi' },
//     { src: '/cars/audi6.webp', title: 'Audi' },
//     { src: '/cars/audi7.webp', title: 'Audi' },
//     { src: '/cars/audi8.webp', title: 'Audi' },
//     { src: '/cars/audi9.webp', title: 'Audi' },
//     { src: '/cars/audi10.webp', title: 'Audi' },
//     { src: '/cars/bmw1.webp', title: 'BMW' },
//     { src: '/cars/bmw2.webp', title: 'BMW' },
//     { src: '/cars/bmw3.webp', title: 'BMW' },
//     { src: '/cars/bmw4.webp', title: 'BMW' },
//     { src: '/cars/bmw5.webp', title: 'BMW' },
//     { src: '/cars/bmw6.webp', title: 'BMW' },
//     { src: '/cars/toyota1.jpg', title: 'Toyota' },
//     { src: '/cars/toyota2.jpg', title: 'Toyota' },
//     { src: '/cars/toyota3.jpg', title: 'Toyota' }
//   ];

//   const Navigation = () => {
//     const router = useRouter();
  
//     // Função para navegar para a página correspondente ao selecionar uma opção
//     const handleChange = (event) => {
//       const selectedMake = event.target.value;
//       if (selectedMake === 'audi') {
//         router.push('/audi');
//       } else if (selectedMake === 'bmw') {
//         router.push('/bmw');
//       } else if (selectedMake === 'toyota') {
//         router.push('/toyota');
//       }
//   };

//   return (
//     <>
//       <header>
//         <section>
//           <figure className='logo'>
//             <img src="/car.png" alt="car" className="icon-car"/>
//             <figcaption>Loc Web</figcaption>
//           </figure>
//           <nav>
//             <ul>
//               <li>
//                 <a href="">Página inicial</a>
//               </li>
//               <li>
//                 <select defaultValue="" onChange={handleChange}>
//                   <option disabled value="">Marcas</option>
//                   <option value="audi">Audi</option>
//                   <option value="bmw">BMW</option>
//                   <option value="toyota">Toyota</option>
//                 </select>
//               </li>
//               <li>
//                 <a href="">Sobre nós</a>
//               </li>
//               <li>
//                 <a href=""><img src="/favorite.png" alt="favorito" id="icon-favorite"/></a>
//               </li>
//               <li>
//                 <a href=""><img src="/purchase.png" alt="carrinho" id="icon-purchase"/></a>
//               </li>
              
//             </ul>
//           </nav>
//         </section>
//       </header>

//       <main>
//         <section className="box-1">
//           <h1>AS MELHORES MARCAS DISPONÍVEIS</h1>
//           <Carousel infiniteLoop={true} autoPlay={true} className="my-custom-carousel">
//             {car_list.map((item, index) => (
//               <div key={index}>
//                 <h2>{item.title}</h2>
//                 <img src={item.src} alt={item.title} /> 
//               </div>
//             ))}
//           </Carousel>
//         </section>

//         <section className="box-2">
//           <h2>NOSSOS CARROS</h2>
//           <section className="news">
//             {car_list.map((item, index) => (
//               <figure key={index}>
//                 <img className='favorite-light' src='/favorite-light.png'/>
//                 <img className='image-list' src={item.src} alt={item.title} />
//                 <p>{item.title}</p>
//                 <button>Saber mais</button>
//               </figure>
//             ))}
//           </section>
//           {/* <button>Ver mais</button> */}
//         </section>
//       </main>
//       <footer>
//         <section>
//           <figure>
//             <img src="/car.png" alt="logo" className="icon-car"/>
//           </figure>
//           <p>@ 2024 - Lívia Gomes | Desenvolvedora Front-End e UI Design</p>
//           <nav className='networks'>
//             <ul>
//                 <li>
//                   <a href="https://www.linkedin.com/in/l%C3%ADvia-gomes-6a5771230/" target='_blank'><img src="/linkedin.png" alt="linkedin"/></a>
//                 </li>
//                 <li>
//                   <a href="https://github.com/ViviSGG" target='_blank'><img src="/github.png" alt="github"/></a>
//                 </li>
//               </ul>
//           </nav>
//         </section>
//       </footer>
//     </>
//   );
// }

