"use client";
import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Link from 'next/link';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cpf: '',
    birthDate: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    cpf: false,
    birthDate: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Execute a validação do formulário
    if (!formData.name || !formData.phone || !formData.cpf || !formData.birthDate) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Remove caracteres não numéricos de telefone, CPF e data de nascimento
    const phoneDigits = formData.phone.replace(/\D/g, '');
    const cpfDigits = formData.cpf.replace(/\D/g, '');
    const birthDateDigits = formData.birthDate.replace(/\D/g, '');

    if (phoneDigits.length !== 11) {
      setFormErrors({ ...formErrors, phone: true });
      return;
    }

    if (cpfDigits.length !== 11) {
      setFormErrors({ ...formErrors, cpf: true });
      return;
    }

    if (birthDateDigits.length !== 8) { // formato DDMMYYYY 
      setFormErrors({ ...formErrors, birthDate: true });
      return;
    }

    // Envia os dados do formulário
    console.log('Formulário submetido:', formData);
    alert('Formulário submetido com sucesso!');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

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
                <a href=""><img src="/purchase.png" alt="carrinho" id="icon-purchase"/></a>
              </li>
              
            </ul>
          </nav>
        </section>
      </header>
      <main>
        <h2>Formulário de Reserva</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Nome:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
            Telefone:
            <InputMask
                mask="(99) 99999-9999"
                maskChar="_"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            {formErrors.phone && <span style={{ color: 'red' }}> Telefone inválido.</span>}
            </label>
            <br />
            <label>
            CPF:
            <InputMask
                mask="999.999.999-99"
                maskChar="_"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
            />
            {formErrors.cpf && <span style={{ color: 'red' }}> CPF inválido.</span>}
            </label>
            <br />
            <label>
            Data de Nascimento:
            <InputMask
                mask="99/99/9999"
                maskChar="_"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
            />
            {formErrors.birthDate && (
                <span style={{ color: 'red' }}> Data de nascimento inválida.</span>
            )}
            </label>
            <br />
            <button type="submit">Confirmar reservas</button>
        </form>
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
