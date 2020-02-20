import React, {Component} from 'react';
import './App.css';
import Student from "./components/Student";
import Parent from "./components/Parent";
import Admin from "./components/Admin";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignInFunc from "./components/SignInFunc";

class App extends Component{
    constructor() {
        super();
        this.state = {
            user_id : ""
        }
        this.changeUser = this.changeUser.bind(this)
    }
    changeUser = (user_id) => {
        this.setState({
            user_id: user_id
        })
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            {/*<SignIn changeUser = {this.changeUser}/>*/}
                            <SignIn/>
                        </Route>
                        <Route path="/student">
                            <Student/>
                        </Route>
                        <Route path="/parent">
                            <Parent/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;