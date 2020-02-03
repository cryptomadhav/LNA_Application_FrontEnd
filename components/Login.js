import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Student from "./Student";
import Parent from "./Parent";
import Admin from "./Admin";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userType : "student",
            user_id : ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleRoute = this.handleRoute.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state);
        });
    };

    handleRoute = (e) => {
        var component = {Student}
        // <Switch>
        //     { this.state.userType === "student" &&
        //     <Route exact path="/student" component={Student} />
        //     }
        //     { this.state.userType === "parent" &&
        //     <Route exact path="/parent" component={Parent} />
        //     }
        //     { this.state.userType === "admin" &&
        //     <Route exact path="/admin" component={Admin} />
        //     }
        // </Switch>
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <label>User Id</label>
                    <input type='text' value={this.state.user_id} name="user_id" onChange={this.handleChange}/>
                </div>
                <select name="User Type"  onChange={this.handleChange}>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="button" onClick={this.handleRoute}>Log in</button>

                {/*<Switch>*/}

                {/*</Switch>*/}
            </div>
        );
    }
}

export default Login;