import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Formularios } from "./components/Formularios";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Apuntes de React con TypeScript</h1>
      <hr></hr>
      <TiposBasicos />
      <hr></hr>
      <ObjetosLiterales />
      <hr></hr>
      <Funciones />
      <hr></hr>
      <Contador />
      <hr></hr>
      <ContadorConHook />
      <hr></hr>
      <Login />
      <hr></hr>
      <Usuarios />
      <hr></hr>
      <Formularios />
    </div >
  )
}

export default App;