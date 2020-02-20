import React, { Component } from 'react'
import axios from "axios";
import {createRenderer} from "react-dom/test-utils";

class RequestTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
        axios.get(`http://localhost:8080/request/status/notall`)
            .then(response => {
                this.setState({
                    requests : Array.from(response.data)
                })
                // console.log(this.state.requests)
            })
            .catch(error => {
                console.log(error)
            });
        this.renderTableData = this.renderTableData.bind(this)
        this.forceUpdate = this.forceUpdate(this);
    }

    renderTableData() {
        return Array.from(this.state.requests).map((request) => {
            const {
                request_id,
                status,
                student_id,
                purpose,
                expectedInTime,
                expectedOutTime
            } = request;
            return (
                <tr key={request_id}>
                    <td>{student_id}</td>
                    <td>{purpose}</td>
                    <td>{status}</td>
                    <td>{expectedOutTime}</td>
                    <td>{expectedInTime}</td>
                    {/*/*/}
                    {/*/*/}
                    {/*/*/}
                    {/*remove row after clicking button*/}
                    {/*/*/}
                    {/*/*/}
                    {/*/*/}
                    <td><button type="button" onClick={() => {
                        axios.post(`http://localhost:8080/trip/${student_id}`)
                            .then(response => {
                                console.log(response)
                            })
                            .catch(error => {
                                console.log(error)
                            });
                        axios.post(`http://localhost:8080/request/all/${request_id}`, "started")
                            .then(response => {
                                console.log(response)
                            })
                            .catch(error => {
                                console.log(error)
                            });
                    }}>Out</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Request Table Table</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Student Id</td>
                        <td>Purpose</td>
                        <td>Status</td>
                        <td>Expected Out Time</td>
                        <td>Expected In Time</td>
                        <td>Check Out</td>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RequestTable;