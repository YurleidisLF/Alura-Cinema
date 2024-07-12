import { useFavoritoContext } from "context/Favoritos"
import styles from "./Card.module.css"
import Favorito from "./Favorito.png"
import noFavorito from "./noFavorito.png"
import { Link } from "react-router-dom"


function Card ({id, capa, titulo}) {
    
    const {favorito, agregarFavorito} = useFavoritoContext()
    const isFavorito = favorito.some(fav => fav.id === id)
    const icon = isFavorito ? Favorito : noFavorito

    return (
        <div className = {styles.container}>
            <Link className = {styles.link} to={`/${id}`}>
            <img src = {capa} alt = {titulo} className = {styles.capa} />
            <h2>{titulo}</h2>
            </Link>
            <img src = {icon} alt = "Icono Favorito" onClick = {() => agregarFavorito({id, titulo, capa})} />
        </div>
    )
}

export default Card
