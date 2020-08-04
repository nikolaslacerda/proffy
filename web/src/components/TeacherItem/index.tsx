import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/51212112?s=460&u=063884d2a3cbe51492350c362022a852c069ebfe&v=4" alt="Nikolas Lacerda"/>
                <div>
                    <strong>Nikolas Lacerda</strong>
                    <span>Programador</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias.
                <br /><br />
                Apaixonado por tecnologia e sempre buscando aprender algo novo.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;