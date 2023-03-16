import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

import UserContextProvider from "./context/UserContext"
import OperationsContextProvider from "./context/OperationsContext";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';    //Permite notificaciones en app

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <OperationsContextProvider>
          <App />
        </OperationsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
    <ToastContainer                      //modificación de propiedades generales a todos los "toast"
      position="bottom-right"
      autoClose={1000}
      theme="colored" />
  </React.StrictMode>,
)
