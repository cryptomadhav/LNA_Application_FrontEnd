import React, {Component} from 'react';
import Reply from "./ParentComponents/Reply";
import TripDataMUI from "./CommonComponents/TripDataMUI";
import axios from "axios";
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom';

class Parent extends Component {
    componentDidMount() {
        this.callAxios()
    }

    constructor(props) {
        super(props);
        this.obj = this.props.location.state
        this.state = {
            student_id : "",
            render: false
        }
        this.str = "http://localhost:8080/parent/id/" + this.obj.user_id

    }
    callAxios() {
        return axios.get(this.str)
            .then(response => {
                this.setState({student_id : response.data}, () => {
                    this.setState({render : true})
                })
                console.log(this.state.student_id)
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Parent Portal</h1>
                    <div>
                        <ul>
                            <li>
                                <a href="/" onClick={() => this.props.history.push('/')}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.state.render && <Reply student_id = {this.state.student_id}/>}
                {this.state.render && <TripDataMUI student_id = {this.state.student_id}/>}
                {/*<Router>*/}
                {/*    <Route path="/parent">*/}
                {/*        <Reply student_id = '11'/>*/}
                {/*    </Route>*/}
                {/*    <Route path="/parent/trip">*/}
                {/*        <TripTableMUI student_id = "11" />*/}
                {/*    </Route>*/}
                {/*</Router>*/}
            </div>
        );
    }
}

export default withRouter(Parent);