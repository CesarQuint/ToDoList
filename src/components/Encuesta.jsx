import { useEffect } from "react"
import { CiCircleRemove } from "react-icons/ci";
import { BsFillEmojiLaughingFill as Feliz,BsFillEmojiSmileFill as Fel ,BsFillEmojiExpressionlessFill as Meh ,BsFillEmojiFrownFill as Triste} from "react-icons/bs";

function Encuesta({encuesta,setEncuesta,sumarTarea}) {

 useEffect(()=>{
    if(encuesta){
        console.log('verdadero');
    }
 }
 ,[])

 const handleCerrar=ev=>{
    ev.preventDefault()
    setEncuesta(false)
}

const handleRespuesta=(e,value=100)=>{
    e.preventDefault()
    setEncuesta(false)
    sumarTarea(value)
}

  return (
    <div className="modal">
        <div className='cerrar-modal text-white text-4xl lg:text-7xl cursor-pointer hover:text-red-600 transition-colors'>
            <CiCircleRemove
            onClick={handleCerrar}
            />
        </div>
        <form 
        className=' w-9/12 bg-gray-100 m-auto my-40 py-10 rounded-md flex flex-col flex-wrap items-center lg:flex-row lg:justify-center'action="">
            <button 
            onClick={e=>handleRespuesta(e,100)}
            className=" p-3" type="submit" value="1" ><p className="border-4 px-2 py-6 text-green-400 border-green-400 text-4xl flex flex-col items-center rounded-lg hover:shadow-green-900 hover:shadow-lg transition-all ease-linear"><Feliz/> <span className="text-xl mt-3">Very Satisfied</span></p></button>  
            <button 
            onClick={e=>handleRespuesta(e,75)}
            className=" p-3" type="submit" value='2'><p className="border-4 px-9 py-6  text-orange-400 border-orange-400 text-4xl flex flex-col items-center rounded-lg hover:shadow-orange-900 hover:shadow-lg transition-all ease-linear"><Fel/> <span className="text-xl mt-3">Satisfied</span></p></button>
            <button 
            onClick={e=>handleRespuesta(e,50)}
            className=" p-3" type="submit" value='3'><p className="border-4 px-8 py-6 text-yellow-400 border-yellow-400 text-4xl flex flex-col items-center rounded-lg hover:shadow-yellow-900 hover:shadow-lg transition-all ease-linear"><Meh/> <span className="text-xl mt-3">No coments</span></p></button>  
            <button 
            onClick={e=>handleRespuesta(e,25)}
            className=" p-3" type="submit" value='4'><p className="border-4 px-6 py-6 text-red-400 border-red-400 text-4xl flex flex-col items-center rounded-lg hover:shadow-red-900 hover:shadow-lg transition-all ease-linear"><Triste/> <span className="text-xl mt-3">Dissatisfied</span></p></button>

        
        </form>
    </div>
  )
}

export default Encuesta