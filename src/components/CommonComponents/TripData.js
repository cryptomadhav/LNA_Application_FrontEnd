import React, { Component } from 'react'
import axios from "axios";

class TripData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
        axios.get(`http://localhost:8080/trip/student/${this.props.student_id}`)
            .then(response => {
                this.setState({
                    requests : Array.from(response.data)
                })
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
                    <td>{actual_in_time}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Trip Data Table</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Student Id</td>
                        <td>Permission Present</td>
                        <td>Out Time</td>
                        <td>In Time</td>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TripData;