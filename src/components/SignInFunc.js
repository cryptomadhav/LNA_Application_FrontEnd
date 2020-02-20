import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {BrowserRouter, Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { createStore } from 'redux'

export default function SignInFunc () {
    const classes = makeStyles(theme => ({
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
    const style = {
        width : "194px"
    }
    const img = {
        width: "70px",
        height: "70px"
    }
    const top = {
        margin_top: "100px",
    }

    const reducer = (user_id = "", action) => {
        return action
    }

    let user = {
        user_id : "",
        userType : ""
    }
    const store = createStore(reducer)

    const idChange = (e) => {
        user.user_id = e.target.value
    };
    // const passChange = (e) => {
    //     setState({
    //         password : e.target.value
    //     }, () => {
    //         console.log(state);
    //     });
    // };
    const typeChange = (e) => {
        user.userType = e.target.value
    };
        return (
            <Container style={top} component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <img style={img} src="https://www.searchpng.com/wp-content/uploads/2019/01/OYO-Rooms-Logo--715x715.png"/>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form style={classes.form}>
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
                                value={user.user_id} onChange={idChange}
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
                        {/*        value={state.password} onChange={passChange}*/}
                        {/*        autoFocus*/}
                        {/*    />*/}
                        {/*</FormControl>*/}
                        <br/>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                                User Type
                            </InputLabel>
                            <Select style={style}
                                    id="type"
                                    name="type"
                                    value={user.userType}
                                    onChange={typeChange}
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
                        {/*<BrowserRouter forceRefresh={true}>*/}
                        {/*<Link to={"/"+state.userType}>*/}
                        {/*    <Button type="button" variant="contained" color="primary">*/}
                        {/*        Log In*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}
                        <Link to={`/${user.userType}`} onClick={() => {
                            // console.log(state)
                                store.dispatch(user.user_id)
                            }
                        }>
                            <Button type="button" variant="contained" color="primary">
                                Log In
                            </Button>
                        </Link>
                        {/*</BrowserRouter>*/}
                    </form>
                </div>
            </Container>
        );
}