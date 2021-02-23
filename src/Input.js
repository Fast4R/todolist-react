import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props)

        this.state={input: ''}

        this.handleChangeInput=this.handleChangeInput.bind(this)
    }

    handleChangeInput(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSendInput = (event) => {
        event.preventDefault();
        const {input} = this.state;
        if(input){
            this.props.handleSendInput(input)
            this.setState({
                input: ''
            })
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSendInput} className="todo__input">
                <input onChange={this.handleChangeInput} type="text" placeholder="Enter new task" value={this.state.input}></input>
                <button>Send</button>
            </form>
        );
    }
}

export default Input;