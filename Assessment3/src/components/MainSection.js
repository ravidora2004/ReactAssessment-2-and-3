import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SHOW_ALL } from '../constants/TodoFilters'

import TaskItem from './TaskItem'


const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
}


export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }


  componentDidMount() {
      this.props.actions.getTodos()

  }
  componentDidUpdate() {
     this.props.actions.getTodos()
  }

  handleClearCompleted = (ids) => {

  }

  handleShow = filter => {
    this.setState({ filter })
  }

  


  render() {
    const { todos, actions } = this.props
    const { filter } = this.state
    
    const filteredTodos = todos.filter(TODO_FILTERS[filter])


    return (
	<Router>
        <div style={{ display: "flex", width: "850px" }}>
            <div  style={{
                padding: "2px",
                width: "70%",
                background: "#f0f0f0"
              }}>	
				  <section className="main">

					<ul className="todo-list">
					  {filteredTodos.map(todo =>
					  
						<Link to={`/${todo.id}/${todo.title}/${todo.completed}`}>
						<label>
							<TodoItem key={todo.id} todo={todo} {...actions} />
							</label>
						</Link>
					  )}
					</ul>
			 
				  </section>
			</div>


	
           <Route path="/:id/:title/:completed" 
              render={(props) => <TaskItem todos={todos} {...actions} {...props} /> }
              />

        </div>
	</Router>
    )
  }
}