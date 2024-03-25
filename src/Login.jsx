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
    onLoginClick = () => {
        console.log(this.state);
        if (this.state.email === "admin@test.com" && this.state.password === "admin123")
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