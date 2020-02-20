import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl";
import {Input, TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";

class StartTrip extends Component {
    classes = makeStyles(theme => ({
        paper: {
            marginTop: "100px",
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
    constructor() {
        super();
        this.state = {
            student_id : ""
        }
        console.log(this.state)
        this.idChange = this.idChange.bind(this)
        this.postSubmit = this.postSubmit.bind(this)
    }

    idChange = (e) => {
        this.setState({
            student_id : e.target.value
        });
    };

    postSubmit = (e) => {
        axios.post(`http://localhost:8080/trip/${this.state.student_id}`)
            .then(r => console.log(r))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Start Trip of Student</h3>
                <form style={this.classes.form}>
                    <FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            type="text"
                            required
                            fullWidth
                            label="Student Id"
                            value={this.state.student_id}
                            onChange={this.idChange}
                        />
                    </FormControl>
                    <br/><br/>
                    <Button variant="contained" color="primary" onClick={this.postSubmit}>Start Student Trip</Button>
                </form>
            </div>
        );
    }
}

export default StartTrip;