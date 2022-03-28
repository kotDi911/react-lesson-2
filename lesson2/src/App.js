import React from "react";
import './App.css';

const User = (props) => {
    return <div className="card">
        <div>User Info:</div>
        <div>Name: {props.name}</div>
        <div>Surname: {props.surname}</div>
        <div>Age: {props.age}</div>
    </div>
};

const UserCardText = (props) => {
  return <div className="info">My info: {props.name} {props.surname} {props.age}</div>
};

const Text = (props) => {
  let text;
  props.age >= 18 ? text = "могу": text = "не могу";

  return <div className='text'>Привет {props.name}, тебе {props.age}, я {text} налить тебе выпить чего-нибудь</div>
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Igor",
            surname: "Aleksandrov",
            age: "22",
        };
    }

    render() {
        console.log(this.state);
        return <div>
            <User name={this.state.name} surName={this.state.surname} age={this.state.age}/>
            <UserCardText name={this.state.name} surName={this.state.surname} age={this.state.age}/>
            <Text name={this.state.name} surName={this.state.surname} age={this.state.age}/>
        </div>
    }
}

export default App;
