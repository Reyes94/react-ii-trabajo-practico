import { useNavigate, useParams } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { useOperationsContext } from "../context/OperationsContext"

import ButtonAdd from "../components/ButtonAdd"

export default function PizzaDetail() {

    const { id } = useParams()
    const { pizzas } = useUserContext()
    const { FormatCoin } = useOperationsContext()
    const navigate = useNavigate()

    //Mostrar detalle de cada pizza-> pizzas/:id
    return (
        <main className="container mt-5 p-5">
            {pizzas.filter(item => item.id === id)      //filtrar pizzas según id, luego recorrer el arreglo para obtener datos requeridos
                .map((item) => (
                    <div className="card mb-3 mt-5" key={item.id}>
                        <div className="row g-0">
                            <div className="col-md-4 ">
                                <img src={item.img} className="img-fluid rounded-start h-100" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="fs-1">{item.name.charAt(0).toUpperCase() +           //primera letra en Mayus y el resto en minúscula
                                        item.name.slice(1).toLowerCase()}</h5>
                                    <p className="card-text">{item.desc}</p>
                                    <p className="card-text">
                                        <b> Ingredientes:</b>
                                    </p>
                                    <ul className="list-unstyled ps-4">
                                        {item.ingredients.map((item) => (
                                            <li key={Math.random()}>🍕 {item}</li>
                                        ))}
                                    </ul>
                                    <h3>Precio: {FormatCoin(item.price)}</h3>
                                    <div className="d-flex justify-content-end gap-3">
                                        <ButtonAdd idPizza={item.id} />
                                        <button className="btn btn-success" onClick={() =>
                                            navigate("/")
                                        }>Volver 🏠</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </main>
    )
}