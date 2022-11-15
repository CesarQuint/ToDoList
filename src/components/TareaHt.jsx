import React from 'react'
import { CiCircleAlert,CiClock1,CiCircleMinus,CiCircleCheck } from 'react-icons/ci';
import {formatearFecha} from '../helpers/index'

function TareaHt({tarea,setEditarTarea,eliminarTarea,setEncuesta}) {
    const{name,fecha,relevan,descrip,completado}=tarea

    const setCompletar=(e,tarea)=>{
        setEncuesta(true)  
        tarea.completado=true 
           
    }
     
 const icon=relevan=>{
    switch (relevan) {
        case 3:
            return (
                <span className='text-5xl text-red-700 inline-block mx-3'
                ><CiCircleAlert/>
                </span>)
            break;
        case 2:
            return(
                <span className='text-5xl inline-block text-yellow-500 mx-3'>
                <CiClock1/>
                </span>
                )
                break;
        case 1:
            return (
                <span className='text-5xl inline-block text-green-600 mx-3'>
                <CiCircleMinus/>
                </span> 
            ) 
                break;
        
        default:
            break;
    }
 }

  return (
    <article className=' border-y-4 first:border-t-0 rounded-md border-blue-400 p-4 my-4 w-4/5 text-left hover:border-blue-700 transition-all '>
    <p className={completado?(
        'text-xl text-blue-800 uppercase my-2 break-words line-through'
    ):(
        'text-xl text-blue-800 uppercase my-2 break-words ' 
    )}>{name}</p>
    <p className=' break-words'>{descrip}</p>
    <div className=' text-right flex flex-row-reverse items-center '>
    <>{icon(relevan)}</>
    <span className='text-gray-400'>Created at: {formatearFecha(fecha)}</span>
    </div>
    <div className=' container flex flex-wrap flex-col md:flex-row md:justify-end md:mt-3 m-1'>
        <button className='md:mx-4 my-2   bg-red-400 text-white px-2 py-2  w-5/5 md:w-1/5  rounded-md  hover:bg-red-600 transition-colors ' type="submit"
        onClick={()=>{eliminarTarea(tarea.id)}}>Delete</button>
        <button className='md:mx-4 my-2  bg-blue-400 text-white px-2 py-2  w-5/5  md:w-1/5 rounded-md  hover:bg-blue-600 transition-colors ' type="submit"
        onClick={()=>setEditarTarea(tarea)}>Edit</button>
        <button disabled={completado} className='md:mr-5 my-2  bg-green-400 text-white px-2 py-2  w-5/5  md:w-2/5 rounded-md  hover:bg-green-600 transition-colors disabled:cursor-not-allowed 
        disabled:bg-yellow-600 disabled:hover:bg-yellow-600' type="submit"
        onClick={e=>setCompletar(e,tarea)}><span className=' -m-1 mr-2 text-xl  inline-block ' ><CiCircleCheck/></span>{completado?'Completed':'Complete'}</button>
    </div>
    </article>
  )
}

export default TareaHt