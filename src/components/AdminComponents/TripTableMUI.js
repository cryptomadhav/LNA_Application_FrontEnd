import React, { Component } from 'react'
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

class TripTableMUI extends Component {
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
                    <TableCell align="center">{actual_out_time.replace("T", " ").substring(0, 19)}</TableCell>
                    <TableCell align="center">
                        <Button type="button" variant="contained" onClick={() => {
                            axios.post(`http://localhost:8080/trip/${student_id}`)
                                .then(response => {
                                    console.log(response)
                                })
                                .catch(error => {
                                    console.log(error)
                                });
                            document.location.reload()
                        }}>
                            Check In
                        </Button>
                    </TableCell>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Trip Table Table</h3>
                <TableContainer component = {Paper}>
                    <Table>
                        <TableHead>
                            <TableCell align="center">Student Id</TableCell>
                            <TableCell align="center">Permission Present</TableCell>
                            <TableCell align="center">Actual Out Time</TableCell>
                            <TableCell align="center">Check In</TableCell>
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

export default TripTableMUI;