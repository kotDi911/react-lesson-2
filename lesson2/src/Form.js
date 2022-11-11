import React from "react";
import './Form.css';

export default class Form extends React.Component {
    state = {
        name: "",
        surname: "",
        error:""
    };

    onSubmit = (event) =>{
        event.preventDefault();
        //event.target.reset();
        const reg = /[A-z]{3}/;
        let name = this.state.name;
        let surname = this.state.surname;

        if(reg.test(name) && reg.test(surname)){
            this.setState({name:'', surname:'', error: ''});
            alert(` Добро пожаловать - ${name} ${surname}`)
        }else {
            this.setState({error : 'С твоими данными что то не так ;('});
        }
    };

    changeValue = (event) =>{
      this.setState({
         [event.target.name]: event.target.value,
      })
    };

    render() {
        return <form onSubmit={this.onSubmit} className='form'>
            <div>
                <input
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.changeValue}
                />
            </div>
            <div>
                <input
                    placeholder='Surname'
                    name='surname'
                    value={this.state.surname}
                    onChange={this.changeValue}
                />
            </div>
            <button type='submit'>Submit</button>
            <span>{this.state.error}</span>
        </form>
    }
}