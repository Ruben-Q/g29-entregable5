import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const PokedexIdPage = () => {

    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [id])

    return (
<article className="poke-idPage">
    <div>
        <img className="header-pokedexPage" src="/images/header-pokedexPage.png" alt="" />
        <img className="header-pokedexPage-sumImagen" src="/images/imageSelect-type.png" alt="" />
    </div>
        
    <section>
    <div className="poke-idPage-info" >
            <img className="id-Page-image" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            <div className="id-Page-imageBGimage"></div>
            <div className="poke-idPage-infoNombre">
            <div className="numero-1"><h3>#1</h3></div>
            <h2 className="id-Pege-nombreFoto">{pokemon?.name}</h2>
            
            <ul className="poke-id-PesoAltura">
            <li>
            <p>Peso</p>
            <p>69</p>
            </li>

            <li>
            <p>Altura</p>
            <p>7</p>
            </li>
            </ul>

            </div>

            <div className="pokePage-idInfo-tipoHabilidades">
            <div>        
            </div>

            <div className="poke-idPage-tipo">
                <h3 className="id-Page-tipoTitulo">Tipo</h3>
                <div className="poke-idPage-infoTipo">
                    <p className="id-Page-venenoso">Planta</p>
                    <p className="id-Page-planta">Venenoso</p>
                </div>
                
            </div>

            <div className="poke-idPage-habilidades">
                <h3 className="id-Page-habilidadesTitulo">Habilidades</h3>
                <div className="poke-idPage-habilidadesTitulo">
                    <p className="id-Page-crecimiento">crecimiento</p>
                    <p className="id-Page-clorofila">Clorofila</p>
                </div>
                
            </div>
            </div>
            
            <section>
            <div  className="poke-id-statsInfo">
            <div>
                <h2 className="stats">stats</h2>
                <div >

                </div>
                <hr className="lineaStats"></hr>
            </div>

            <div className="stats-hp" >
                <h4>HP</h4>
                <div className="visor-hp"></div>
            </div>

            <div className="stats-ataque" >
                <h4>Ataque</h4>
                <div className="visor-ataque"></div>
            </div>

            <div className="stats-defensa" >
                <h4>Defensa</h4>
                <div className="visor-defensa"></div>
            </div>

            <div className="stats-Velocidad" >
                <h4>Velocidad</h4>
                <div className="visor-velocidad"></div>
            </div>
            </div>

            </section>
        
            
    </div>
</section> 
    
    <section className="movements">
        <pan className="tex-movement">Movement</pan>
    </section>
</article>

    )
}

export default PokedexIdPage