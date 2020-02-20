import React, {Component} from 'react';
import RequestFormMUI from "./StudentComponents/RequestFormMUI";
import TripTableMUI from "./AdminComponents/TripTableMUI";
import {Route, NavLink, withRouter} from 'react-router-dom';
import TripDataMUI from "./CommonComponents/TripDataMUI";
import RequestStatus from "./StudentComponents/RequestStatus";

class Student extends Component {

    constructor(props) {
        super(props);
        this.obj = this.props.location.state
        this.state = {
            render : false,
            student_id : ""
        }
        console.log(this.obj)

    }
    componentDidMount() {
        this.setState({
            student_id : this.props.location.state.user_id
        }, () => {
            this.setState({render : true});
            console.log(this.state.student_id)
        })
    }
    render() {
        return (
            <div>
                {/*<Router>*/}
                <div className="header">
                    <h1>Student Portal</h1>
                        <div>
                            <ul>
                                <li><NavLink to="/student">Request</NavLink></li>
                                <li><NavLink to="/student/trip">Trips</NavLink></li>
                                <li><NavLink to="/student/request">Request Status</NavLink></li>
                                <li><a href="/" onClick={() => this.props.history.push('/')}>Logout</a></li>
                            </ul>
                        </div>
                </div>

                    <Route path="/student" exact>
                        {this.state.render && <RequestFormMUI student_id = {this.state.student_id}/>}
                    </Route>
                    <Route path="/student/trip" exact>
                        {this.state.render && <TripDataMUI student_id = {this.state.student_id}/>}
                    </Route>
                    <Route path="/student/request" exact>
                        {this.state.render && <RequestStatus student_id = {this.state.student_id}/>}
                    </Route>
                {/*</Router>*/}
            </div>
        );
    }
}

export default withRouter(Student);