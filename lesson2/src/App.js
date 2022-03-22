import React from "react";
import './App.css';

const User = (props) =>{
  return <div>{props.name}</div>
};

class App extends React.Component {
  state = {
    name: "ds"
  };
  render() {
    return <div>
      <User name={this.props.name}/>
    </div>
  }
}

export default App;
