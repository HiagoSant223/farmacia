import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/Categorias/listarCategorias/ListarCategorias';
import DeletarCategoria from './components/Categorias/deletarCategorias/DeletarCategoria';
import FormularioCategoria from './components/Categorias/formularioCategoria/FormularioCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <div className='min-h-[80vh]'>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
    
    </>
);
}
export default App;