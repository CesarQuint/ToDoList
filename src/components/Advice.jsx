import {useState} from 'react'

function Advice() {

    const[advice,setAdvice]=useState('')

    const getAdvice=async()=>{
        const respuesta =await fetch('https://api.adviceslip.com/advice')
        const resultado= await respuesta.json()
        const tip= resultado.slip.advice
        setAdvice(tip)
    }
    getAdvice()
    

  return (
    <div className='col-span-2 h-screen'>
        <section className=' w-11/12 bg-white mt-7 p-4 rounded-md m-auto'>
            <p className=' text-2xl mb-3 text-center text-blue-700'>Daily Tip</p>
            <span className=' text-center'>{advice}</span>
        </section>

    </div>
  )
}

export default Advice