import React from "react";
import './App.css';

// const User = ({name, surname, age}) => {
//     return <div className="card">
//         <div>User Info:</div>
//         <div>Name: {name}</div>
//         <div>Surname: {surname}</div>
//         <div>Age: {age}</div>
//     </div>
// };
//
// const UserCardText = ({name, surname, age}) => {
//   return <div className="info">My info: {name} {surname} {age}</div>
// };
//
// const Text = (props) => {
//   let text;
//   props.age >= 18 ? text = "могу": text = "не могу";
//
//   return <div className='text'>Привет {props.name}, тебе {props.age}, я {text} налить тебе выпить чего-нибудь</div>
// };
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Igor",
//             surname: "Aleksandrov",
//             age: "22",
//         };
//     }
//
//     render() {
//         return <div>
//             <User name={this.state.name} surname={this.state.surname} age={this.state.age}/>
//             <UserCardText name={this.state.name} surname={this.state.surname} age={this.state.age}/>
//             <Text name={this.state.name} surName={this.state.surname} age={this.state.age}/>
//         </div>
//     }
// }

const User = ({data}) => {
    const {name, surname, age} = data;
    return <div className="card">
        <div>User Info:</div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Age: {age}</div>
    </div>
};

const UserCardText = ({data}) => {
    const {name, surname, age} = data;
    return <div className="info">My info: {name} {surname} {age}</div>
};

const Text = ({data}) => {
    const {name, age} = data;
    return <div className='text'>Привет {name}, тебе {age}, я {age >= 18 ? "могу": "не могу"} налить тебе выпить чего-нибудь</div>
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
        return <div>
            <User data={this.state}/>
            <UserCardText data={this.state}/>
            <Text data={this.state}/>
        </div>
    }
}

export default App;
