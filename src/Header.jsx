// useContext permite acessar as informações
// disponibilizadas pelo nosso Context.

import { useContext } from "react";

import { CartContext } from "./CartContext";

export default function Header() {

  // Pegamos a lista de produtos do contexto.

  const { cart } = useContext(CartContext);

  return (
    <header>
      <h1>Minha Loja</h1>

      {/* Exibimos a quantidade de produtos no carrinho. */}

      <h3>🛒 Carrinho: {cart.length} itens</h3>
    </header>
  );
}