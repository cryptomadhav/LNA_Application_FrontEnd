import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class SignIn extends Component{
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
    style = {
        width : "194px"
    };
    img = {
        width: "70px",
        height: "70px"
    };
    top = {
        margin_top: "100px",
    };
    constructor() {
        super();
        this.state = {
            userType : "",
            user_id : ""
        };
        this.idChange = this.idChange.bind(this)
        this.typeChange = this.typeChange.bind(this)
        this.passChange = this.passChange.bind(this)
    }
    idChange = (e) => {
        this.setState({
            user_id : e.target.value
        }, () => {
            console.log(this.state);
        });
    };
    passChange = (e) => {
        this.setState({
            password : e.target.value
        }, () => {
            console.log(this.state);
        });
    };
    typeChange = (e) => {
        this.setState({
            userType : e.target.value
        }, () => {
            console.log(this.state);
        });
    };

    render() {
        return (
            <Container style={this.top} component="main" maxWidth="xs">
                <CssBaseline />
                <div className={this.classes.paper}>
                    <img style={this.img} src="https://www.searchpng.com/wp-content/uploads/2019/01/OYO-Rooms-Logo--715x715.png"/>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form style={this.classes.form}>
                        <FormControl>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="User ID"
                                name="email"
                                autoComplete="email"
                                value={this.state.user_id} onChange={this.idChange}
                                autoFocus
                            />
                        </FormControl>
                        <br/>
                        {/*<FormControl>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        margin="normal"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="password"*/}
                        {/*        label="Password"*/}
                        {/*        name="password"*/}
                        {/*        autoComplete="password"*/}
                        {/*        value={this.state.password} onChange={this.passChange}*/}
                        {/*        autoFocus*/}
                        {/*    />*/}
                        {/*</FormControl>*/}
                        <br/>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                                User Type
                            </InputLabel>
                            <Select style={this.style}
                                    id="type"
                                    name="type"
                                    value={this.state.userType}
                                    onChange={this.typeChange}
                                    label="User Type"
                                    simpleValue={false}
                                    required
                            >
                                <MenuItem value="student">Student</MenuItem>
                                <MenuItem value="parent">Parent</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                            </Select>
                        </FormControl>
                        <br/><br/>
                            <Link to={{pathname : `/${this.state.userType}`, state : {
                                    user_id : this.state.user_id
                                }}}>
                                <Button type="button" variant="contained" color="primary">
                                    Log In
                                </Button>
                            </Link>
                    </form>
                </div>
            </Container>
        );
    }
}

export default withRouter(SignIn);