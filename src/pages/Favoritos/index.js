import styles from "./Favoritos.module.css"
import { useFavoritoContext } from "context/Favoritos"
import Card from "componentes/Card"
import Banner from "componentes/Banner"
import Titulo from "componentes/Titulo"


function Favoritos () {

    const {favorito} = useFavoritoContext()
    
    return (
        <>
            <Banner img = "favoritos" color = "#00BF63"/>         
            <Titulo>
                <h1>Mis Favoritos</h1>
            </Titulo>

            <section className = {styles.container}>
                {favorito.map(fav => { 
                    return <Card {...fav} key = {fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos