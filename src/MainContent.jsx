import React, { Component } from "react";
import "./index.css";

export default class MainContent extends Component {
    state = {
        pageTitle: "Customers",
        customersCount: 5,
        customers:
            [
                { id: 1, name: "Ryder", phone: "123-456", address: { city: "London" }, photo: "https://picsum.photos/id/1060/60" },
                { id: 2, name: "Chase", phone: "789-012", address: { city: "New York" }, photo: "https://picsum.photos/id/1061/60" },
                { id: 3, name: "Marshall", phone: "345-678", address: { city: "Paris" }, photo: "https://picsum.photos/id/1062/60" },
                { id: 4, name: "Skye", phone: "901-234", address: { city: "Tokyo" }, photo: "https://picsum.photos/id/1063/60" },
                { id: 5, name: "Rocky", phone: "567-890", address: { city: "Sydney" }, photo: "https://picsum.photos/id/1064/60" }

            ],
    };

    customerNameStyle = (custName) => {
        if (custName.startsWith("S")) return "pink-highlight border-left";
        else if (custName.startsWith("R")) return "green-highlight border-right";
        else return "";
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
                            <th>Photo</th>
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
                    <td><img src={cust.photo} alt="Customer" /></td>
                    <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        });
    };
}