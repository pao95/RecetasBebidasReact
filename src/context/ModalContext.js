import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios'
export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, guardarIdReceta] = useState(null)
    const [infoReceta, guardarReceta] = useState({})

    useEffect(() => {
        const obtenerReceta = async() =>{
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios.get(url)
            console.log(resultado.data.drinks[0])
            guardarReceta(resultado.data.drinks[0])

        }

        obtenerReceta()
    }, [idReceta])


    return (
        <ModalContext.Provider
            value={{
                infoReceta,
                guardarIdReceta,
                guardarReceta,
            }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;