import React from 'react'
import TareaHt from './TareaHt';

function Content({tareas,setEditarTarea,eliminarTarea,setEncuesta,formatoEncuesta}) {
  return (
    <div className='col-span-7 h-screen'>
      <section className='container bg-gray-200  h-4/5 m-auto mx-5 lg:mr-0 my-7 rounded-md  p-4 text-center w-11/12  drop-shadow-md'>
      {!tareas.length?(
      <>
        <p className=' text-gray-800 text-4xl p-4'>There's no Tasks</p>
        <p className=' text-gray-600 text-2xl '>Let's Begin your Day</p>
      </>
      ):(
        <>
        <h2 className='text-3xl p-2 text-blue-700 border-b-2 border-gray-300 '>--Tasks Assigned--</h2>
        <div className=' flex flex-col items-center overflow-scroll overflow-x-hidden h-5/6'>
        {tareas.map(tarea=>(
          <TareaHt
          key={tarea.id}
          tarea={tarea}
          setEditarTarea={setEditarTarea}
          eliminarTarea={eliminarTarea}
          setEncuesta={setEncuesta}
          formatoEncuesta={formatoEncuesta}
          />
        ))}
        </div>
        </>
      )}
      </section>
    </div>
  )
}

export default Content