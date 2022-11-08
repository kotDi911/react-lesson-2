import React from "react";
import './Form.css';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={title: 'React'};
        this.handleClick = this.handleClick.bind(this)

    }
    title = () =>  document.title = this.state.title;

    handleClick(e){
        if(this.state.title === 'React'){
            this.setState({title: 'Document'});
        }else {
            this.setState({title: 'React'});
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Title</button>
            </div>
        );
    }

    componentDidMount() {
        this.title();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       this.title();
    }
}

export default Lifecycle;