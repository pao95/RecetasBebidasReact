import React, { useContext, useState, Fragment } from 'react';
import { CategoriasContext } from '../context/CategoriaContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        ingrediente: "",
        categoria: "",
    })
    const[error, guardarError] = useState(false)
    const { ingrediente, categoria } = busqueda;

    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas, guardarConsulta } = useContext(RecetasContext)
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        })
    }

    const buscaReceta = e => {
        e.preventDefault();
        if(ingrediente==="" && categoria===""){
            guardarError(true)
            return;
        }
        guardarError(false)
        buscarRecetas(busqueda)
        guardarConsulta(true);
    }

    return (
<Fragment>
        <form onSubmit={buscaReceta}>
            <div className="form-row">
                <div className="form-group col-md-4">

                    <input type="text" className="form-control"
                        placeholder="Escribe un ingrediente"
                        name="ingrediente"
                        value={ingrediente}
                        onChange={actualizarState}
                    ></input>
                </div>
                <div className="form-group col-md-4">

                    <select className="form-control"
                        name="categoria"
                        onChange={actualizarState}
                        value={categoria}
                    >
                        <option>Selecciona una categoría</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>

                        ))}
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary  btn-block">Buscar bebidas</button>

                </div>
            </div>
        </form>

        {error ?   <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>: null}
      

      </Fragment>
    );
}

export default Formulario;