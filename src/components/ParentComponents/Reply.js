import React, {Component} from 'react';
import axios from "axios";

class Reply extends Component {
    req = []
    constructor(props) {
        super(props);
        this.state = {
            requests : []
        }
        console.log(this.props)
        this.reload = this.reload.bind(this)
        this.sid = this.props.student_id
        this.str = "http://localhost:8080/request/" + this.sid
        console.log(this.str)
        axios.get(`http://localhost:8080/request/${this.sid}`)
            .then(response => {
                // console.log(this.state)
                this.setState({
                    requests : response.data
                })
                this.req = this.state.requests
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    reload = () => {
        this.location.reload()
    }

    render() {
        return (
            <div>
                {Array.from(this.state.requests).map(item => (
                    <div key={item.request_id}>
                        <h3>Purpose: {item.purpose}</h3>
                        <h3>Expected Out Time: {item.expectedOutTime}</h3>
                        <h3>Expected In Time: {item.expectedInTime}</h3>
                        <button type="button" onClick={(e) => {
                            axios.post(`http://localhost:8080/request/all/${item.request_id}`, "approved")
                                .then(response => {
                                    console.log(response)
                                })
                                .catch(error => {
                                    console.log(error)
                                });
                            document.location.reload()
                        }}>Approve</button>
                        <button type="button" onClick={ (e) =>{
                            axios.post(`http://localhost:8080/request/all/${item.request_id}`, "declined")
                            .then(response => {
                                console.log(response)
                            })
                            .catch(error => {
                                console.log(error)
                            });
                            document.location.reload()
                        }}>Decline</button>
                    </div>
                ))}
            </div>
        )
    }
}
export default Reply;