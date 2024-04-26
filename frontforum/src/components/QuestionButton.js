import React from 'react';
import { Link } from 'react-router-dom';

function QuestionButton() {
    return (
        <Link to="/criar-pergunta" className="question-button">
            Criar pergunta
        </Link>
    );
}

export default QuestionButton;