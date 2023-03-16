import { Link } from "react-router-dom"

export default function EmptyCart() {

    //Componente creado para que si cliente aún no lleva productos, se despliegue esto en la vista Cart
    //Permite realizar un if en Cart, sólo agregando el componente, dejando más ordenado el código en Cart
    //Cart: page

    return (
        <div className="container mt-5 p-5">
            <div className="d-flex flex-column">
                <h1 className="text-center">Carro 🛒</h1>
                <h5 className="mt-5 text-center">NO LLEVAS NINGÚN PRODUCTO :(</h5>
                <h5 className="text-center">Revisa nuestro catálogo de pizzas aquí:</h5>
                <Link to="/" className="links fs-1 text-center">🍕</Link>
            </div>
        </div>
    )
}