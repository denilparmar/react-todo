import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputToDo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
class TodoContainer extends React.Component {

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({todos: response.data}));
    }

    state = {
        todos: [],
        show: false,
    };

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
            show: !this.state.show,
        });
    };

    deleteToDo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    addToDoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show}/>
                <InputToDo addTodoProps={this.addToDoItem} />
                <TodosList todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteToDoProps={this.deleteToDo}>
                </TodosList>
            </div>
        );
    }
}

export default TodoContainer;