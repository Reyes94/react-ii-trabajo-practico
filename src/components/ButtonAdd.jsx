import { toast } from "react-toastify"
import { useOperationsContext } from "../context/OperationsContext"

export default function ButtonAdd({idPizza}) {

    const { AddPizza } = useOperationsContext()

    return (
        <button className="btn btn-danger" onClick={() => {
            AddPizza(idPizza)
            toast.success("Agregaste el producto al carro")
        }}>Añadir 🛒</button>
    )
}