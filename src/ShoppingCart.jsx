import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {

    //mounted
    constructor(props)
    {
        // console.log("Constroctor - Shopping cart");
        super(props);
        // initialization of the state
        this.state = {
        products: [ ],
    };
    }
    
    render() {
        // console.log("render - Shopping Cart");
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

    componentDidMount = async () => {
        //fetch data from data source
        var response = await fetch("http://localhost:5000/products", {
            method: "GET",
        });
        var prods = await response.json()

        console.log(prods);

        this.setState({ products: prods });
        
        // console.log("componentDidMount-Shopping Cart")
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate - Shopping cart",
        //     prevProps,
        //     prevState,
        //     this.props,
        //     this.state
        // );

        // if (prevProps.x != this.props.x) {
        //     //make http call
        // }
    }
    componentWillUnmount() {
        // console.log("componentWillUnmount - Shopping cart")
    }


    componentDidCatch(error, info) {
        // console.log("componentDidCatch - Shopping cart");
        // console.log(error, info);
        // localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
 }
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