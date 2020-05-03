import React, { useContext, Fragment, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Receta = ({ receta }) => {



    const { infoReceta,guardarIdReceta, guardarReceta} = useContext(ModalContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const mostrarIngredientes = informacion =>{
    let ingredientes  = [];
    for(let i =1; i<16; i++ ){
        if(informacion[`strIngredient${i}`]){
            ingredientes.push(
            <li>{informacion[`strIngredient${i}`]} {`strMeasure${i}`}</li>
            )
        }
    }
    return ingredientes;
}
return (
    <Fragment>
        <div className="card">
            <img src={receta.strDrinkThumb} className="card-img-top" alt={receta.strDrink}></img>
            <div class="card-body">

                <h5 className="card-title">{receta.strDrink}</h5>
                <button type="button"
                    class="btn btn-primary btn-block"
                    onClick={() => {
                        guardarIdReceta(receta.idDrink);
                        handleShow()
                    }}
                >Ver Receta</button>
                <Modal show={show} onHide={() => {
                                            handleClose(); 
                                            guardarReceta({});
                                            guardarIdReceta(null);
                                            } }>
                    <Modal.Header closeButton>
                        <Modal.Title>{infoReceta.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {infoReceta.strInstructions}
                        </p>
                        <img src={infoReceta.strDrinkThumb} class="card-img-top" alt="...">
                        </img>
                        <h2>Ingredientes</h2>
                        <ul>
                            {mostrarIngredientes(infoReceta)}
                        </ul>
                    </Modal.Body>
           
                </Modal>

            </div>
        </div>


    </Fragment>
);
}

export default Receta;