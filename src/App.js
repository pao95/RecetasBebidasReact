import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas';
import ModalProvider from './context/ModalContext';


function App() {
  return (

    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header></Header>
          <div className="container mt-5">
            <Formulario></Formulario>

          </div>

          <div className="container mt-5 ">
            <ListaRecetas></ListaRecetas>

          </div>
         

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
