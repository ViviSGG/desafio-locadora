"use client";
import { useState } from 'react';
import InputMask from 'react-input-mask';
import Link from 'next/link';

export default function SimpleReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cpf: '',
    birthDate: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, '');
    const cpfDigits = formData.cpf.replace(/\D/g, '');
    const birthDateDigits = formData.birthDate.replace(/\D/g, '');
    const withdrawalDateDigits = formData.withdrawal.replace(/\D/g, '');
    const devolutionDateDigits = formData.devolution.replace(/\D/g, '');

    if (phoneDigits.length !== 11) {
      alert('Telefone inválido.');
      return;
    }

    if (cpfDigits.length !== 11) {
      alert('CPF inválido.');
      return;
    }

    if (birthDateDigits.length !== 8) {
      alert('Data de nascimento inválida.');
      return;
    }

    if (withdrawalDateDigits.length !== 8) {
      alert('Data de retirada inválida.');
      return;
    }

    if (devolutionDateDigits.length !== 8) {
      alert('Data de devolução inválida.');
      return;
    }

    console.log('Formulário submetido:', formData);
    alert('Formulário submetido com sucesso!');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
        <section className='form-box'>
          <form onSubmit={handleSubmit}>
            <h2>FORMULÁRIO DE RESERVA</h2>
            <label>
              Nome:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Telefone:
              <InputMask
                mask="(99) 99999-9999"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CPF:
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Data de Nascimento:
              <InputMask
                mask="99/99/9999"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Data de Retirada:
              <InputMask
                mask="99/99/9999"
                name="withdrawal"
                value={formData.withdrawal}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Data de Devolução:
              <InputMask
                mask="99/99/9999"
                name="devolution"
                value={formData.devolution}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Confirmar</button>
          </form>
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
