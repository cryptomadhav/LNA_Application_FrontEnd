import React, {Component} from 'react';
import RequestForm from "./StudentComponents/RequestForm";

class Student extends Component {
    render() {
        return (
            <div>
                <h1>Student Portal</h1>
                {/*add props user id here*/}
                <RequestForm student_id = "1"/>
            </div>
        );
    }
}

export default Student;