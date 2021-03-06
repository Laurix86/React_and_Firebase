import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadodenombres = () =>{
    const [nombre, setNombre] = useState('');
    const [listadenombres, setListadenombres] = useState([]);

    const addNombre = (event) => {
        event.preventDefault();
 
        const nuevoNombre ={
            id:uniqid(),
            tituloNombre: nombre
        }
        setListadenombres([...listadenombres, nuevoNombre]);
        setNombre('')
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
                                <li key='item.id'className='list-group-item'>{item.tituloNombre}</li>

                            )
                        }

                    </ul>
                </div>
                <div className='col'>
                    <h2>Formulario para aniadir nombres</h2>
                    <form onSubmit ={(e)=> addNombre(e)} className='form-group'>
                        <input 
                            onChange={(e)=>(setNombre(e.target.value))} 
                            className='form-control mb-3' type='text' 
                            placeholder='Introduce el nombre'
                            value = {nombre}
                        />
                        <input 
                            className='btn btn-info btn-block' 
                            type='submit' 
                            value='Registrar nombre'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listadodenombres