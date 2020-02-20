import React, { Component } from 'react'
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TripDataMUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
        console.log(`http://localhost:8080/trip/student/${this.props.student_id}`)
        axios.get(`http://localhost:8080/trip/student/${this.props.student_id}`)
            .then(response => {
                this.setState({
                    requests : Array.from(response.data)
                })
            })
            .catch(error => {
                console.log(error)
            });
        this.renderTableDataMUI = this.renderTableDataMUI.bind(this)
    }

    renderTableDataMUI() {
        return Array.from(this.state.requests).map((request) => {
            const {
                trip_id,
                student_id,
                permissionPresent,
                actual_out_time,
                actual_in_time
            } = request;
            return (
                <TableRow key={trip_id}>
                    <TableCell align="center">{student_id}</TableCell>
                    <TableCell align="center">{permissionPresent.toString()}</TableCell>
                    <TableCell align="center">{actual_out_time}</TableCell>
                    <TableCell align="center">{actual_in_time}</TableCell>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Trip Data Table</h3>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableCell align="center">Student Id</TableCell>
                            <TableCell align="center">Permission Present</TableCell>
                            <TableCell align="center">Out Time</TableCell>
                            <TableCell align="center">In Time</TableCell>
                        </TableHead>
                        <TableBody>
                            {this.renderTableDataMUI()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default TripDataMUI;