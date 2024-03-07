import React, { Component } from "react";

export default class MainContent extends Component{
    state = {
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            { id: 1, name: "Ryder", phone: "123-456", address: { city: "London" } },
            { id: 2, name: "Chase", phone: "789-012", address: { city: "New York" } },
            { id: 3, name: "Marshall", phone: "345-678", address: { city: "Paris" } },
            { id: 4, name: "Skye", phone: null, address: { city: "Tokyo" } },
            { id: 5, name: "Rocky", phone: null, address: { city: "Sydney" } }
        ],
    };

    render() {
        return (
            <div>
                <h4 className="m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge badge-secondary m-2">
                        {this.state.customersCount}
                    </span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        );
    }


//Executes when the user clicks on Refresh button
    onRefreshClick = () => {
        this.setState({
            customersCount: 7
        });
    }
    getPhoneToRender = (phone) => {
        if (phone)
        return phone;
        else {
            return <div className="bg-warning p-2 text-center">No Phone </div>;
        }
    }

    getCustomerRow = () => {
        
        return this.state.customers.map((cust) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        });
    };
}