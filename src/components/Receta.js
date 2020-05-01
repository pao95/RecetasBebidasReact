import React, { useContext, Fragment, useState } from 'react';
import { ModalContext } from '../context/ModalContext';


const Receta = ({receta}) => {



    const {guardarIdReceta} = useContext(ModalContext);
   
      
    return (  
<Fragment>
        <div className="card">
        <img src={receta.strDrinkThumb} className="card-img-top" alt={receta.strDrink}></img>
        <div class="card-body">
            <h5 className="card-title">{receta.strDrink}</h5>
            <button type="button" 
            class="btn btn-primary btn-block"
            onClick={()=>{
                guardarIdReceta(receta.idDrink)
            }}
            >Ver Receta</button>

        </div>
    </div>


    </Fragment>
    );
}
 
export default Receta;