import React from "react"

class TodoItem extends React.Component {

  componentWillUnmount() {
    alert("Item about to be deleted!");
  }
  
  render() {

    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    return <li className="todo-item"><input type="checkbox"
      checked={this.props.todo.completed}
      onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
      <button onClick={() => this.props.deleteToDoProps(this.props.todo.id)}>Delete</button>
      <span style={this.props.todo.completed ? completedStyle : null}>
        {this.props.todo.title}
      </span>
    </li>
  }
}

export default TodoItem;