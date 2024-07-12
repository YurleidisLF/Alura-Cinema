import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import styles from "./index.module.css"
import { useEffect, useState } from "react";


function Inicio ()  {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/YurleidisLF/Alura-Cinema-APi/videos")
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        })
    }, [])

    return (
        <>
            <Banner img="home" color="#154580"/>
            <Titulo>
                <h1>Un lugar para guardar tus videos favoritos </h1>
            </Titulo>

            <section className = {styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key = {videos.id}/>
                })}
            </section>
        </>
    )
}

export default Inicio;
//https://api.thecatapi.com/api/images/get?format=src&ype=png Api utilizada para hacer pruebas
