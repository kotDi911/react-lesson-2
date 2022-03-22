import './App.css';
import React from "react";

const UserName = (props) => {
    return <div>{props.name}</div>
};

export default class App extends React.Component {
    state = {
        name: "Nik",
    };

    render() {
        return <div>
            <UserName name = {this.props.name}/>
        </div>
    }
}