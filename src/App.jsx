import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemCount from "./componentes/ItemCount/ItemCount"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}></Route>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}></Route>
        <Route path="/item/:idItem"element={<ItemDetailContainer/>} ></Route>
        <Route path="*" element={<h2> Sitio en construccion, vuelva mas tarde!</h2>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
