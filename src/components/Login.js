import React, {Component} from 'react';
import Student from "./Student";
import Parent from "./Parent";
import Admin from "./Admin";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {BrowserRouter,Switch, Route, Link, Redirect, useHistory, useLocation, History} from 'react-router-dom';

class Login extends Component {
    style = {
        width : "100px"
    }
    constructor() {
        super();
        this.state = {
            userType : "",
            user_id : ""
        };
        this.idChange = this.idChange.bind(this)
        this.typeChange = this.typeChange.bind(this)
    }

    idChange = (e) => {
        this.setState({
            user_id : e.target.value
        }, () => {
            console.log(this.state);
        });
    };
    typeChange = (e) => {
        this.setState({
            userType : e.target.value
        }, () => {
            console.log(this.state);
        });
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <FormControl>
                        <InputLabel htmlFor = "login-id">User Id</InputLabel>
                        <Input id="login-id" value={this.state.user_id} onChange={this.idChange} required/>
                    </FormControl>
                    {/*<br/>*/}
                    {/*<FormControl>*/}
                    {/*    <InputLabel htmlFor = "login-password">User Id</InputLabel>*/}
                    {/*    <Input id="login-password" value={this.state.user_id} type = "password" onChange={this.handleChange} required/>*/}
                    {/*</FormControl>*/}
                    <br/>
                    <FormControl>
                        <InputLabel id="login-type">Type</InputLabel>
                        <Select
                            id="login-type"
                            value={this.state.userType}
                            onChange={this.typeChange}
                        >
                            <MenuItem value="student">Student</MenuItem>
                            <MenuItem value="parent">Parent</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                        </Select>
                    </FormControl>
                    <br/><br/>
                    <BrowserRouter forceRefresh={true}>
                        <Link to={"/"+this.state.userType}>
                            <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit}>
                                Log In
                            </Button>
                        </Link>
                    </BrowserRouter>

                </form>
            </div>
        );
    }
}

export default Login;