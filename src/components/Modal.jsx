import {useEffect,useState} from 'react'
import { CiCircleRemove } from "react-icons/ci";
import Mensaje from './Mensaje';

function Modal({setModal,guardarTarea,editarTarea,setEditarTarea}) {


//Information
const[name,setName]=useState('')
const[descrip,setDescrip]=useState('')
const[relevan,setRelevan]=useState(0)
const[fecha,setFecha]=useState('')
const[id,setId]=useState('')
const[error,setError]=useState('')
const[completado,setCompletado]=useState(false);

//Revision

useEffect(()=>{
    if(Object.keys(editarTarea).length>0){
        setName(editarTarea.name)
        setDescrip(editarTarea.descrip)
        setRelevan(editarTarea.relevan)
        setFecha(editarTarea.fecha)
        setId(editarTarea.id)
        setCompletado(editarTarea.completado)
    }
},[])


    const handleCerrar=ev=>{
        ev.preventDefault()
        setModal(false)
        setEditarTarea({})
    }

const handleAddTask=ev=>{
    ev.preventDefault();

    if([name,descrip].includes('')||relevan==0){
        setError('Todos los campos son necesarios');

        setTimeout(() => {
            setError('');
        }, 1500);
        return;
    }
    guardarTarea({name,id,fecha,relevan,descrip,completado});

}


  return (
    <div className='modal'>
        <div className='cerrar-modal text-white text-4xl lg:text-7xl cursor-pointer hover:text-red-600 transition-colors'>
            <CiCircleRemove
            onClick={handleCerrar}
            />
        </div>
        <form 
        onSubmit={handleAddTask}
        className=' w-9/12 bg-gray-100 m-auto my-40 py-10 rounded-md flex flex-col flex-wrap items-center'action="">
            {error &&<Mensaje>{error}</Mensaje>}
            <legend className=' text-2xl text- uppercase mb-4'>{editarTarea.name?'Change Task':'Add Task'}</legend>
            <label htmlFor="" className=' p-2 uppercase text-xl'>Name Task:</label>
            <input 
                className=' p-2 w-3/4 rounded-md text-center drop-shadow-lg focus:text-blue-700 mb-4' 
                type="text" placeholder='Task Name' id=""
                value={name}
                onChange={ev=>setName(ev.target.value)} />
            <label htmlFor="" className=' p-2 uppercase text-xl'>Information:</label>
            <input className=' p-2 w-3/4 rounded-md h-20 text-center drop-shadow-lg focus:text-blue-700 mb-4' 
                type="text" placeholder='Task Information' id=""
                value={descrip}
                onChange={ev=>setDescrip(ev.target.value)} />
            <select className=' m-6 p-3 w-3/4 rounded-md drop-shadow-lg focus:text-blue-700 text-center' 
            name="Relevancia" id=""
            value={relevan}
            onChange={ev=>setRelevan(Number(ev.target.value))}>
                <option value="0">--Select--</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
            <input  className=' bg-blue-500  rounded-md w-3/4 p-5 text-white hover:bg-blue-700 transition-colors ' type="submit" value={editarTarea.name?'Change Task':'Add Task'} />
        </form>
    </div>
  )
}

export default Modal