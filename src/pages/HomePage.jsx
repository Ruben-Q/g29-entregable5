import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch= useDispatch()

    const navigate = useNavigate()

    const hendleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate("/pokedex")
    }

    return (
    <div className="homePage">
        <img className="homeImg-pokedex" src="images/imgHd-portada.png" alt="" />
        <h2 className="home-trainer">Hi Trainer!</h2>
        <p className="home-start">To start. please, enter your name</p>
        <form className="home-form" onSubmit={hendleTrainer}>
            <input className="home-input" ref={inputTrainer} type="text" />
            <button className="home-btn-start">start</button>
        </form>
        <div>
        <img className="home-pageImg-footer" src="images/home-page-footer.png" alt="" />
        </div>
    </div>
    )
}

export default HomePage