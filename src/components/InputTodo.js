import React, { Component } from 'react';

class InputToDo extends Component {

    state = {
        title: ""
    };

    onTextChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" placeholder="add todo..." 
                value={this.state.title}
                onChange={this.onTextChange} 
                className="input-text"/>
                <input type="submit" value="submit" className="input-submit" disabled={!this.state.title}/>
            </form>
        )
    }
}

export default InputToDo;