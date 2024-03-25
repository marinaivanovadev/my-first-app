import React, { Component } from "react";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "", password: "", message: ""
        };
    }
    render() {
        return (
            <div className="col-lg-9">
                <h4 className="m-1 p-2 boarder-bottom">Login</h4>

                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value })

                        }}
                    />
                </div>

                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}
                    />
                </div>
                <div className="text-end ">
                    {this.state.message}
                    <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Login</button>
                    
                </div>
            </div>
        );
    }
    onLoginClick = async () => {
        console.log(this.state);
        // Check if email and password fields are empty
        if (!this.state.email || !this.state.password) {
            this.setState({
                message: <span className="text-danger">Email and password are required</span>
            });
            return; // Exit function early if fields are empty
        }
        
        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, { method: "GET"}
        );
        var body = await response.json();
        console.log(body);
        if (body.length > 0)
        {
            //success
            this.setState({
                message: <span className="text-success">Successfully Logged-in</span>
            });
        }
        else {
            this.setState({ message: <span className="text-danger"> Invalid login, please try again</span> });
        }
    };
}  