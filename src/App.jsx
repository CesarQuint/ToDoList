import Content from "./components/Content"
import Side from "./components/Side"
import Modal from './components/Modal'
import Advice from "./components/Advice"
import Encuesta from "./components/Encuesta"
import {useState,useEffect} from 'react'
import {generarId,formatearFecha} from './helpers/index'

function App() {

  //Informacion cargada
  const[modal,setModal]=useState(false);
  const[tareas,setTareas]=useState([])
  const[editarTarea,setEditarTarea]=useState({})
  const[encuesta,setEncuesta]=useState(false)
  const[valores,setValores]=useState([])
  const[porcentage,setPorcentage]=useState(0)

  //UseEffect

  useEffect(()=>{
    if(Object.keys(editarTarea).length>0){
      console.log(editarTarea);
      setModal(true);
    }
  },[editarTarea])

  useEffect(()=>{
    if(valores.length){
      const pp=valores.reduce((acc,item)=>acc=acc+item)
      const percent=pp/valores.length
      setPorcentage(percent)
    }
  },[valores])

  const guardarTarea=tarea=>{
      if(tarea.id){
        const tareaActualizada=tareas.map(tareaState=>tareaState.id===tarea.id?tarea:tareaState)
        setTareas(tareaActualizada)
        setEditarTarea({})
      }else{
        tarea.id=generarId();
        tarea.fecha =Date.now();
        setTareas([...tareas,tarea])
      }
      setModal(false)
  }


  const eliminarTarea=(id)=>{
    const tareasFiltradas=tareas.filter(tarea=>tarea.id !==id)
    setTareas(tareasFiltradas)
    console.log(tareasFiltradas);
  }

  const sumarTarea=value=>{
    console.log(value);
    setValores([...valores,value])
    console.log(valores);
  }

  return (
    <body className="grid-cols-1 lg:grid-cols-12  grid lg:gap-2 bg-center">
      <Side
      setModal={setModal}
      tareas={tareas}
      setTareas={setTareas}
      valores={valores}
      porcentage={porcentage}
      />
      <Content
      tareas={tareas}
      setEditarTarea={setEditarTarea}
      eliminarTarea={eliminarTarea}
      setEncuesta={setEncuesta}
      />
      <Advice/>
      {modal&&<Modal
      setModal={setModal}
      guardarTarea={guardarTarea}
      setEditarTarea={setEditarTarea}
      editarTarea={editarTarea}
      />}
      {encuesta&&<Encuesta
      encuesta={encuesta}
      setEncuesta={setEncuesta}
      setValores={setValores}
      valores={valores}
      sumarTarea={sumarTarea}
      />}
    </body>
  )
}

export default App
