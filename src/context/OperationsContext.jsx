import { createContext, useContext, useState } from "react"
import { useUserContext } from "./UserContext"

//OPERACIONES

export const OperationsContext = createContext()

export default function OperationsContextProvider({ children }) {

    const { pizzas } = useUserContext()
    const [carro, setCarro] = useState([])

    //FORMATEADOR VALOR A CLP
    const FormatCoin = (number) => 
       ( new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number))
    
    //CALCULO TOTAL
    let total = 0
    carro.map((i) => (
        total += Number(i.precio) * Number(i.cantidad)
    ))

    //SUMAR PIZZA
    const AddPizza = (idPizza) => {
        const pizzaSeleccionada = pizzas.find(item => item.id === idPizza)       //buscar pizza seleccionada a través del ID
        if (carro.find(item => item.id === idPizza)) {                          //si en el carro ya se encuentra la pizza (id), sumarle 1 a la cantidad
            setCarro(carro.                                                     //map recorre todas las pizzas, cada vez que se hace click en el botón  
                map((i) => {
                    if (i.id === idPizza) {                                     //si la pizza ya existe, se suma 1 a la cantidad
                        return { ...i, cantidad: Number(i.cantidad) + 1 }
                    } else {                                                   //si ya existe, pero no fue a la cual se le hizo click para agregar, la retorna sin sumarle 1
                        return i
                    }
                }))
        } else {                                               //agregar pizza por primera vez
            const objetoCarro = {
                "id": pizzaSeleccionada.id,
                "cantidad": "1",
                "precio": pizzaSeleccionada.price
            }
            setCarro([...carro, objetoCarro])                  //actualizar arreglo
        }
    }

    //RESTAR PIZZA
    const SubtractPizza = (idPizza) => {
        let pizzaActual = carro.find(item => item.id === idPizza)        //variable encuentra a la pizza por id
        if (Number(pizzaActual.cantidad) === 1) {
            setCarro(carro.filter(item => item.id !== idPizza))         //Si la cantidad de una pizza es 1 y se hace click para disminuir cantidad: devolver todos los elementos del carro que no tengan el id seleccionado
        } else {
            setCarro(carro.
                map((i) => {
                    if (i.id === idPizza) {
                        return { ...i, cantidad: Number(i.cantidad) - 1 }  //Si la cantidad es >1, disminuir en 1 la cantidad de la pizza seleccionada
                    } else {
                        return i                                          //retornar las que no fueron seleccionadas
                    }
                }))
        }
    }

    return (
        <OperationsContext.Provider value={{ carro, setCarro,  FormatCoin, total, AddPizza, SubtractPizza }}>
            {children}
        </OperationsContext.Provider>
    )
}

export const useOperationsContext = () => useContext(OperationsContext);

