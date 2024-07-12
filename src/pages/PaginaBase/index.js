import Cabecera from "componentes/Cabecera/Cabecera"
import Container from "componentes/Container"
import Pie from "componentes/Pie/Pie"
import FavoritosProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase () {
    return (
        <main>
            <Cabecera />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase