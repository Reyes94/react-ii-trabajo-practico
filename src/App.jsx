import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PizzaDetail from "./pages/PizzaDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<PizzaDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
    </>
  )
}