import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import AccessButton from './components/AccessButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CriarPergunta from './components/CriarPergunta';
import PaginaInicial from './components/PaginaInicial';

function App() {
    return (
        <Router>
            <div>
                <Sidebar />
                <SearchBar />
                <AccessButton />
                <Routes>
                    <Route path="/" element={<PaginaInicial />} />
                    <Route path="/criar-pergunta" element={<CriarPergunta />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;