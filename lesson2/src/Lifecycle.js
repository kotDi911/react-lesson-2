import React from "react";
import './Form.css';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={title: 'React'};
        document.title = this.state.title;
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.view.document.title = this.state.title;
        if(this.state.title === 'React'){
            this.setState({title: 'Document'});
        }else {
            this.setState({title: 'React'});
        }

        console.log(e.view.document.title);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }

    componentDidMount() {
        // this.setState({title: 'Document'});
    }
}

export default Lifecycle;