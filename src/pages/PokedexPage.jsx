import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokePage/PokeCard"
import SelectType from "./SelectType"


const PokedexPage = () => {

    const [inputValue, setInputValue] = useState("")
    const [typeSelected, setTypeSelected] = useState("allPokemons")

    const trainer = useSelector(store => store.trainer)

    const inputSearch = useRef()
    
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
    const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)
    
    useEffect(() =>  {
        if(typeSelected === "allPokemons") {
    getPokemons()
        }else{
    getTypePokemon(typeSelected)
        }
    
    }, [typeSelected]) 

    const handleSearch = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }


    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

    return (
        <div className="header-entrenador">
        <div className="header-imagen">
        <img className="header-pokedexPage" src="/images/header-pokedexPage.png" alt="" />
        <img className="header-pokedexPage-sumImagen" src="/images/imageSelect-type.png" alt="" />
        
        </div>
        <div>
            <p className="header-bv-entrenador">Bienvenido entrenador, aqui podras encontrar tu pokemon favorito.{trainer}</p>
        <form className="header-group" onSubmit={handleSearch}>
            <input className="header-input" ref={inputSearch} type="text"/>
            <button className="header-btnSearch">Search</button>
        </form>
        </div>
        

        <SelectType
        setTypeSelected = {setTypeSelected}
        />
    <div className="container-poke">
            {
                pokemons?.results.map(poke => (
                    <PokeCard
                        key={poke.url}
                        url={poke.url}
                    />
                ))
            }
        </div>
    </div>
    )
}

export default PokedexPage