// createContext: cria nosso contexto.
// useState: permite armazenar os produtos do carrinho.

import { createContext, useState } from "react";

// Criamos o contexto que será compartilhado
// entre os componentes da aplicação.

export const CartContext = createContext();

// Criamos o Provider, responsável por disponibilizar
// as informações do carrinho para os outros componentes.

export function CartProvider({ children }) {

    // Estado que armazena os produtos adicionados.
    // Inicialmente, nosso carrinho está vazio.

    const [cart, setCart] = useState([]);

    // Função responsável por adicionar produtos.
    // Recebe o produto que o usuário selecionou.

    function addToCart(product) {

        // Criamos um novo array contendo os produtos anteriores
        // e adicionamos o novo produto ao final.

        setCart([...cart, product]);
    }

    // Função responsável por remover um produto.
    // Recebe o índice do produto que será removido.

    function removeFromCart(index) {

        // filter cria um novo array mantendo apenas
        // os produtos que não possuem o índice selecionado.

        setCart(cart.filter((_, i) => i !== index));
    }

    // Calculamos o valor total do carrinho.
    // reduce percorre todos os produtos e soma seus preços.

    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    // O Provider disponibiliza os estados e funções
    // para todos os componentes descendentes.

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, total }}
        >
            {children}
        </CartContext.Provider>
    );
}