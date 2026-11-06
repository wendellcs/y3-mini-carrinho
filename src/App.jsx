import { useContext } from "react";

import { CartContext } from "./CartContext";
import Header from "./Header";

// Lista de produtos disponíveis na loja.

const products = [
  { id: 1, name: "Teclado", price: 150 },
  { id: 2, name: "Mouse", price: 80 },
  { id: 3, name: "Headset", price: 200 }
];

export default function App() {

  // Acessamos os dados e funções do contexto.

  const { cart, addToCart, removeFromCart, total } =
    useContext(CartContext);

  return (
    <main>

      {/* Cabeçalho da aplicação. */}

      <Header />

      <h2>Produtos disponíveis</h2>

      {/* Exibimos os produtos disponíveis. */}

      {products.map((product) => (
        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>R$ {product.price.toFixed(2)}</p>

          {/* Adicionamos o produto ao carrinho. */}

          <button onClick={() => addToCart(product)}>
            Adicionar
          </button>

        </div>
      ))}

      <hr />

      <h2>Meu carrinho</h2>

      {/* Verificamos se o carrinho está vazio. */}

      {cart.length === 0 ? (
        <p>Nenhum produto adicionado.</p>
      ) : (

        // Percorremos os produtos adicionados.

        cart.map((product, index) => (
          <div key={index}>

            <p>
              {product.name} - R$ {product.price.toFixed(2)}
            </p>

            {/* Removemos o produto selecionado. */}

            <button onClick={() => removeFromCart(index)}>
              Remover
            </button>

          </div>
        ))
      )}

      {/* Exibimos o valor total da compra. */}

      <h2>Total: R$ {total.toFixed(2)}</h2>

    </main>
  );
}