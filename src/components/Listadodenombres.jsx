import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadodenombres = () =>{
    const [nombre, setNombre] = useState('');
    const [listadenombres, setListadenombres] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState(null);

    const addNombre = (event) => {
        event.preventDefault();
        if(!nombre.trim()){
            setError("El campo nombre esta vacio");
            return
        }
        const nuevoNombre ={
            id:uniqid(),
            tituloNombre: nombre
        }
        setListadenombres([...listadenombres, nuevoNombre]);
        setNombre('');
        setError(null);
    }

    const deleteNombre=(id)=>{
        const nuevoArray = listadenombres.filter(item => item.id !== id)
        setListadenombres(nuevoArray)
    }

    const editar = (item) =>{
        setModoEdicion(true);
        setNombre(item.tituloNombre);
        setId(item.id);
        
    }

    const editarNombre = (e) =>{
        e.preventDefault();
        if(!nombre.trim()){
            setError("El campo nombre esta vacio");
            return
        }
        const NuevoArray = listadenombres.map(item => item.id === id ? {id:item.id, tituloNombre:nombre}: item)
        setListadenombres(NuevoArray);
        setModoEdicion(false);
        setNombre("");
        setError(null);
    }

    return(
        <div>
            <h2>Aplicacioon de CRUD basica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de Nombres</h2>
                    <ul className='list-group'>
                        {
                            listadenombres.map( item =>
                                <li key={item.id} className='list-group-item'>
                                    {item.tituloNombre}
                                    <button
                                    className="btn btn-danger float-right"
                                    onClick={()=> {deleteNombre(item.id)}}
                                    > Borrar
                                    </button>
                                    <button
                                    className="btn btn-info float-right"
                                    onClick={()=> {editar(item)}}
                                    > Editar
                                    </button>
                                </li>

                            )
                        }

                    </ul>
                </div>
                <div className='col'>
                    <h2>Formulario para aniadir nombres</h2>
                    <form onSubmit ={modoEdicion ? editarNombre : addNombre} className='form-group'>
                        <input 
                            onChange={(e)=>(setNombre(e.target.value))} 
                            className='form-control mb-3' type='text' 
                            placeholder='Introduce el nombre'
                            value = {nombre}
                        />
                        <input 
                            className='btn btn-info btn-block' 
                            type='submit' 
                            value={modoEdicion ? 'Editar Nombre' : 'Registrar Nombre'}
                        />
                    </form>
                    {error !== null ? (<div className='alert alert-danger'>{error}</div>) : (<div></div>)}
                </div>
            </div>
        </div>
    )
}

export default Listadodenombres