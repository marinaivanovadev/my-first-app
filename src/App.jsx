import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Route from react-router-dom

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
