
//*************************************************** */
import { Component, useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../PokedexPage/styles/PokeCard.css'

const PokeCard = ({ url }) => {

  const [pokemon, getPokemon] = useFetch(url)
  useEffect(() => {
  getPokemon()
  }, [])

  const navigate = useNavigate()

  const handleNavigator = () => {
    navigate(`/pokedex/${pokemon.id}`);
  }
//const firstType = pokemon?.types[0].type.name

  return (
<article className={`pokecard ${pokemon?.types[0].type.name}-border`} onClick={handleNavigator}>
    
        
      <header className={`pokecard-header ${pokemon?.types[0].type.name}-gradient`}>
        <img className="pokecard-image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="pokecard-body">
        
        <h3 className={`pokecard-name ${pokemon?.types[0].type.name}-color`}>{pokemon?.name}</h3>
        <ul className="pokecard-types">
          {
            pokemon?.types.map((typeInfo) => (
              <li className="pokecard-typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <hr className="pokecard-hr" />
        <ul className="pokecard-stats" >
          {
            pokemon?.stats.map((statInfo) => (
              <li className="pokecard-stat" key={statInfo.stat.url}>
                <span className="pokecard-stat-name">{statInfo.stat.name}</span>

                <span className={`pokecard-stat-value ${statInfo}.base-stat-color`}></span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
    
  )
}

export default PokeCard