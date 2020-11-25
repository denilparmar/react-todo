import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputToDo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: false
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = id => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
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
                <Header />
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