import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://github.com/mamede.png" alt="Felipe Mamede" />
        <div>
          <strong>Felipe Mamede</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de programação.
        Apaixonado por difundir conhecimento e por mudar a vida das pessoas através das maiores experiências em programação. 
        Mais de 200.000 pessoas já passaram por aqui.</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;