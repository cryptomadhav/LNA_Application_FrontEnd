import React, {Component} from 'react';
import axios from 'axios';
// import TimePicker from "react-time-picker";

class RequestForm extends Component {
    constructor() {
        super();
        this.state = {
            request_id : "0",
            purpose : null,
            expectedOutTime : null,
            expectedInTime : null,
            status: "pending",
            // add props call here
            student_id : "1"
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.eventHandler = this.eventHandler.bind(this)
        this.changeFormat = this.changeFormat.bind(this)

    }

    // onChange = time => this.setState({ expectedOutTime : time})

    eventHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };
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
        // console.log(this.state);
        this.changeFormat()
        // console.log(this.state)
        // console.log(this.setState())
        axios.post('http://localhost:8080/request', this.state)
            .then(response => {
                // console.log(this.state)
                // console.log(response)
            })
            .catch(error => {
                // console.log(error)
            })
    };

    render() {
        return (
            <div>
                <h2>Submit Request</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Purpose</label>
                        <input type='text' name = "purpose" value={this.state.purpose} onChange={this.eventHandler}/>
                    </div>
                    {/*<TimePicker onChange={this.onChange} value={this.state.expectedOutTime}/>*/}
                    <div>
                        <label>Expected Out Time</label>
                        <input type='datetime-local' name = "expectedOutTime" value={this.state.expectedOutTime} onChange={this.eventHandler}/>
                    </div>
                    <div>
                        <label>Expected In Time</label>
                        <input type='datetime-local' name = "expectedInTime" value={this.state.expectedInTime} onChange={this.eventHandler}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default RequestForm;