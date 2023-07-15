import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"


function App() {

  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer/>}></Route>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}></Route>
          <Route path="/item/:idItem"element={<ItemDetailContainer/>} ></Route>
          <Route path="*" element={<h2> Sitio en construccion, vuelva mas tarde!</h2>}></Route>
        </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
