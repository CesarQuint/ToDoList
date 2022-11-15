import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Side({setModal,porcentage}) {

  const handleAgregar=()=>{
    console.log('Hola desde modal');
    setModal(true)
  }

  const percentage = porcentage;
  return (
    <div className='col-span-3'>
      <section className='container text-center'>
        <div className=' bg-gray-200 h-48 m-auto my-7 rounded-md  p-4 text-center mx-5 drop-shadow-md'>
          <p className='text-xl  text-blue-500'>Add New Task</p>
          <span className='text-7xl inline-block p-5 text-blue-500 hover:text-blue-700 transition-colors duration-200 hover:cursor-pointer'>
          <CiCirclePlus
          onClick={handleAgregar}
          />
          </span>
        </div>
      </section>
      <div className='container'>
        <p className=' bg-gray-200  m-auto my-7 rounded-md  p-4 text-center mx-5 drop-shadow-md text-xl  text-blue-500'>
          Satisfaction:
        <CircularProgressbar className=' m-auto w-2/4 py-4 ' value={percentage} text={`${percentage}%`} />
        </p>
      </div>
    </div>
  )
}

export default Side