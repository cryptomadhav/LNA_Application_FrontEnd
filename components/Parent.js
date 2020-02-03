import React, {Component} from 'react';
import Reply from "./ParentComponents/Reply";

class Parent extends Component {
    render() {
        return (
            <div>
                <h1>Parent Portal</h1>
                <Reply/>
            </div>
        );
    }
}

export default Parent;