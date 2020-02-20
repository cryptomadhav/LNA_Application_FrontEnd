import React, {Component} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class RequestFormMUI extends Component {
    classes = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
    style = {
        width : "278px"
    }
    constructor(props) {
        super(props);
        this.state = {
            request_id : "0",
            purpose : null,
            expectedOutTime : null,
            expectedInTime : null,
            status: "pending",
            student_id : this.props.student_id
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.eventHandler = this.eventHandler.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
        this.inHandler = this.inHandler.bind(this)
        this.outHandler = this.outHandler.bind(this)

    }
    eventHandler = event => {
        this.setState({
            purpose : event.target.value
        })
        console.log(this.state);
    };
    outHandler = event => {
        this.setState({
            expectedOutTime : event.target.value
        })
    }
    inHandler = event => {
        this.setState({
            expectedInTime : event.target.value
        })
    }
    changeFormat = () => {
        this.setState({
                expectedInTime : this.state.expectedInTime.toString().replace("T", " "),
                expectedOutTime : this.state.expectedOutTime.toString().replace("T", " ")
            }, () => {
                console.log(this.state)
            }
        )
    };
    submitHandler = event => {
        event.preventDefault();
        this.changeFormat()
        console.log(this.state)
        axios.post('http://localhost:8080/request', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

    render() {
        return (
            <div>
                <h2>Submit Request</h2>
                <form onSubmit={this.submitHandler}  style={this.classes.form}>
                    <FormControl>
                    <TextField style={this.style} id="request-purpose" value={this.state.purpose} onChange={this.eventHandler}
                                   variant="outlined"
                                   label="Purpose"
                                   fullWidth required/>
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl>
                        <TextField
                            id="time"
                            label="Expected Out Time"
                            type="datetime-local"
                            value={this.state.expectedOutTime}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.outHandler}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl>
                        <TextField
                            id="time"
                            label="Expected In Time"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={this.state.expectedInTime}
                            onChange={this.inHandler}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default RequestFormMUI;