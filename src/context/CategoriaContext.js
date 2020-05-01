import React, { createContext, useState, useEffect } from 'react';
import axios  from "axios";


//Crear context
//el create context es una funcion que crea el context
export const CategoriasContext = createContext();

//provider
//es de donde van a salir los datos y las funciones

const CategoriasProvider = (props) =>{

    //states o effects
const[categorias, guardarCategorias] = useState([]);



useEffect(() => {

    const obtenerCategorias = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
        const categorias = await axios.get(url);
        console.log(categorias.data.drinks)

        guardarCategorias(categorias.data.drinks)
    }

    obtenerCategorias()
    
}, [])


    return(
        <CategoriasContext.Provider
        value={{
            categorias
        }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;