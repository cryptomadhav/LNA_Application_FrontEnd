import React, { Component } from 'react'
import axios from "axios";

class TripTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
        axios.get(`http://localhost:8080/trip/current`)
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
    }

    renderTableData() {
        return Array.from(this.state.requests).map((request) => {
            const {
                trip_id,
                student_id,
                permissionPresent,
                actual_out_time,
                actual_in_time
            } = request;
            return (
                <tr key={trip_id}>
                    <td>{student_id}</td>
                    <td>{permissionPresent.toString()}</td>
                    <td>{actual_out_time}</td>
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

                    }}>In</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Trip Table Table</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Student Id</td>
                        <td>Permission Present</td>
                        <td>Actual Out Time</td>
                        <td>Check In</td>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TripTable;