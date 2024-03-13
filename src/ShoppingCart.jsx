import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {

    state = {
        products: [
            { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
            { id: 2, productName: "MacBook Pro", price: 1299, quantity: 0 },
            { id: 3, productName: "Samsung Galaxy S21", price: 999, quantity: 0 },
            { id: 4, productName: "Sony PlayStation 5", price: 499, quantity: 0 },
            { id: 5, productName: "Bose QuietComfort 45 Headphones", price: 329, quantity: 0 },
            { id: 6, productName: "Samsung 55\" 4K Smart TV", price: 899, quantity: 0 }
        ],
    };
    render() {
        return <div>
            <h4>Shopping Cart</h4>
            <div>
                {this.state.products.map((prod) => {
                    return <Product />

                })}
            </div>
        
        </div>
    }
}