import { toast } from "react-toastify";     //permite realizar notificaciones 

import { useUserContext } from "../context/UserContext"
import { useOperationsContext } from "../context/OperationsContext";

import EmptyCart from "../components/EmptyCart"

export default function Cart() {

    const { pizzas, } = useUserContext()
    const { carro, total, SubtractPizza, AddPizza, FormatCoin } = useOperationsContext()

    if (carro.length === 0) return <EmptyCart />    //si no hay productos en el carro, retornar componente EmpyCart

    return (
        <div className="container mt-5 p-5">
            <div>
                <h1 className="text-center">Carro 🛒</h1>
                <div >
                    <table className="table table-striped-columns mt-5">
                        <caption className="title-table">Detalle del carro:</caption>
                        <tbody>
                            {carro.map((i) => {
                                let pizza = pizzas.find(item => item.id === i.id)
                                return (
                                    <tr key={i.id}>
                                        <th scope="row"><img src={pizza.img} className="img-cart" alt="..." />  {pizza.name}</th>
                                        <td valign="middle" className="text-end fs-4 align-center">{FormatCoin(Number(i.precio) * Number(i.cantidad))}</td>
                                        <td valign="middle">
                                            <button className="btn btn-sm btn-danger" onClick={() => { SubtractPizza(i.id), toast.error("Eliminaste el producto del carro") }}>-</button>
                                            <button className="btn btn-outline"> {i.cantidad}</button>
                                            <button className="btn btn-sm btn-primary" onClick={() => { AddPizza(i.id), toast.success("Agregaste el producto al carro") }}>+</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h4>Total: {FormatCoin(total)}</h4>
                    <div className="d-flex justify-content-center mt-3"> {/*modificación de posición, diferente al resto de los toast */}
                        <button className="btn btn-success " onClick={() => toast.warning("Redirigiendo al portal de pagos", { position: toast.POSITION.TOP_CENTER })}>Ir a pagar 💲</button>
                    </div>
                </div>
            </div>
        </div>
    )
}