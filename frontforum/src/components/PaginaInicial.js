import React from 'react';
import { Link } from 'react-router-dom';
import QuestionButton from './QuestionButton';

function PaginaInicial() {
    return (
        <div className="pagina-inicial-container">
            <h2 className ="pagina-inicial-title">Cálculo 1</h2>
            <Link to="/criar-pergunta">
                <QuestionButton />
            </Link>
        </div>
    );
}

export default PaginaInicial;