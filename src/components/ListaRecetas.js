import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const ListaRecetas = () => {

    const { recetas } = useContext(RecetasContext)

    return (

        <div className="card-columns">
           
            {recetas.map( receta =>(
                <Receta key={receta.idDrink} receta={receta}></Receta>
            ))}

        </div>
    );
}

export default ListaRecetas;