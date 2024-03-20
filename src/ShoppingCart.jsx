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
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>

                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <Product key={prod.id}
                                product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>
                        );
                    })}
                </div>
            </div>
        )
    };

    //executes when the user click on + button
    handleIncrement = (product, maxValue) => {
    //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity < maxValue) {
            allProducts[index].quantity++;
     
            //update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    };

    //executes when the user click on - button
    handleDecrement = (product, minValue) => {
        //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity > minValue) {
            allProducts[index].quantity--;

            //update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    };

    // executes when the user clicks on Delete (X) button in the Product component.
    handleDelete = (product) => {
        //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (window.confirm("Are you sure to delete?")) {

            //delete product based on index
            allProducts.splice(index, 1);

            //update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    };
}