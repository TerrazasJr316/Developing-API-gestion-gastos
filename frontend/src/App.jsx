import {useState} from "react"
import Dashboard from "./routes/Dashboard";
import Form from "./routes/Form"
import NavBar from "./components/NavBar";
import Categorias from "./routes/Categorias";
import Movimientos from "./routes/Movimientos";


const App = () => {
  // hooks
  const [ruta,setRuta] = useState("/");


  return (
    <div className="w-screen h-screen bg-slate-50 flex flex-wrap justify-center">
      {ruta == "/" ? null : (<NavBar ruta={ruta} setRutas={setRuta} />)}
      
      {
        ruta == "/"?
        (<Form ruta = {setRuta}/>):
        ruta=="/dashboard"?
        (<Dashboard/>):
        ruta == "/categorias"?
        (<Categorias/>):
        ruta == "/movimientos"?
        (<Movimientos/>):
        null
      }
    </div>
  )
}

export default App