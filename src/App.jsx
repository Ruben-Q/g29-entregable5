import PokedexPage from "./pages/PokedexPage"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexIdPage from "./pages/PokedexIdPage"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import "./components/PokedexPage/styles/PokeCard.css"
import "./components/PokedexPage/styles/hp-portada.css"
import "./components/PokedexPage/styles/pokedexPage.css"
import "./components/PokedexPage/styles/SelectType.css"
import "./components/PokedexPage/styles/Poke-idPage.css"


function App() {

  return (

<div>
  

<Routes>
<Route path="/" element= {<HomePage />} />
  <Route element={<ProtectedRoutes />} >
  <Route path="/pokedex" element= {<PokedexPage />} />
  <Route path="/pokedex/:id" element={<PokedexIdPage />} />
</Route>
</Routes>
</div> 
  )
}

export default App
