import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'  
//These are for re-routing to another page when you click on a card from the main page (App.jsx)
//import { BrowserRouter } from "react-router-dom";
//import ReactDOM from "react-dom/client";
//import React from "react";
import './index.css'
import App from './App.jsx'

{/* Name: Krystan Kornafel */}
{/* Assignment: SEG3125 Assignment 1 */}
{/* This file is used to initialize all the components of the React website */}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );