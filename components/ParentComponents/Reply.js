import React, {Component} from 'react';

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: "party",
            expectedOutTime: 9,
            expectedInTime: 10,
            status: "pending",
            message : false
        }


    }

    eventHandler = event => {
        event.preventDefault();
        this.setState({

            message:true
        })
        console.log(this.state)

    }
    replyYes = p =>{
        p.preventDefault();
        this.setState({status:"approved"})
        console.log(this.state)
    }
    replyNo = p =>{
        p.preventDefault();
        this.setState({status:"declined"})
        console.log(this.state)
    }



    render() {
        return (
            <div>
                <div><button type="submit" onClick={this.eventHandler}>New Request View</button></div>
                {this.state.message && <h2>{this.state.purpose}</h2>}
                {this.state.message && <h2>{this.state.expectedOutTime}</h2>}
                {this.state.message && <h2>{this.state.expectedInTime}</h2>}

                {this.state.message && <h2>{this.state.status}</h2>}
                {this.state.message && <button type="submit" onClick={this.replyYes}>Approve</button> }
                {this.state.message && <button type="submit" onClick={this.replyNo}>Decline</button>}

            </div>)
    }
}
export default Reply;