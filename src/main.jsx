import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Importamos nosso Provider.

import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    {/* 
      Envolvemos a aplicação com CartProvider.
      Assim, todos os componentes poderão acessar
      as informações do carrinho.
    */}

    <CartProvider>
      <App />
    </CartProvider>

  </React.StrictMode>

);