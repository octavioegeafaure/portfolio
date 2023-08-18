// import About from './About/About'
import './App.css'
import { Header } from './Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import Proyectos from './Proyectos/Proyectos';
import { ProyectoElegidoProvider } from './Context/ProyectoElegidoContext';
function App() {
  const titulo = localStorage.getItem('titulo')
  return (
    <>
    <ProyectoElegidoProvider>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path={`/portfolio/proyectos`} element={<Proyectos />} />
        <Route path={`/portfolio/?p=/proyectos`} element={<Proyectos />} />
      </Routes>
      </BrowserRouter>
    </ProyectoElegidoProvider>


    </>
  )
}

export default App
