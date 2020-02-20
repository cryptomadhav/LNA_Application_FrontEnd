import React, {Component} from 'react';
import RequestTableMUI from "./AdminComponents/RequestTableMUI";
import TripTableMUI from "./AdminComponents/TripTableMUI";
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import StartTrip from "./AdminComponents/StartTrip";

class Admin extends Component {
    render() {
        return (
            <div>
                <Router>
                <div className="header">
                    <h1>Admin Portal</h1>
                    <div>
                        <ul>
                            <li><NavLink to="/admin">View Requests</NavLink></li>
                            <li><NavLink to="/admin/trip">View Trips</NavLink></li>
                            <li><NavLink to="/admin/starttrip">Start Trip</NavLink></li>
                            <li><a href="/" onClick={() => this.props.history.push('/')}>Logout</a></li>
                        </ul>
                    </div>
                </div>
                    <Route path="/admin" exact>
                        <RequestTableMUI/>
                    </Route>
                    <Route path="/admin/trip">
                        <TripTableMUI/>
                    </Route>
                    <Route path="/admin/starttrip">
                        <StartTrip/>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default Admin;