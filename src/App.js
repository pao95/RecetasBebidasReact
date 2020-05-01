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
          <div>
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
  
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
    
  </div>
</div>


          </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
