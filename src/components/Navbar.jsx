import { Link } from "react-router-dom"
import { useOperationsContext } from "../context/OperationsContext"

export default function Navbar() {

    const { total, FormatCoin } = useOperationsContext()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h3>🍕 Pizzería Mamma Mía!</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito">🛒 {FormatCoin(total)}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}