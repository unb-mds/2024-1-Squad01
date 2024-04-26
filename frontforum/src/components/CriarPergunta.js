import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CriarPergunta() {
    const [pergunta, setPergunta] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com a pergunta, como enviar para um servidor ou armazenar localmente
        console.log('Pergunta criada:', pergunta);
        // Limpar o campo de pergunta depois de submeter
        setPergunta('');
        // Navegar de volta para a página inicial
        navigate('/'); // Navegar para a página inicial
    };

    return (
        <div className="criar-pergunta-container"> 
            <h2>Escreva sua pergunta:</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="pergunta-input"
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)}
                    placeholder="Digite sua pergunta..."
                    rows="4"
                    cols="50"
                    required
                ></textarea>
                <br />
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
}

export default CriarPergunta;