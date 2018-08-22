import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

	
	
	
    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.title}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text ) } />
      )
    } else {
      element = (
        <div className="view">
          <Table>
            <TableRow>
                <TableCell width ="70%"> 
                
                        <label onDoubleClick={this.handleDoubleClick}>
                          {todo.title}
                        </label>
                </TableCell>
                <TableCell  align ="right">
                        <Button variant="contained" 
                          //value ="Complete"
                          style={{
              								backgroundColor: "#9E9E9E",
              								fontSize: "10px",
              							}}
                          checked={todo.completed}
                          color="primary"   
                          label='Complete'
                          onClick={() => completeTodo(todo.id,!todo.completed)}
                          >Toggle Complete</Button>
                </TableCell>
                <TableCell width ="5%" align ="center">


                        <Button type="button" 
                        	className="destroy" 
                        	variant="contained" 
                        	style={{
              								backgroundColor: "#f44336",
              								fontSize: "10px"
              							}} 
                        	align ="center" color="secondary"
                          onClick={() => deleteTodo(todo.id)} />

                </TableCell>
            </TableRow>
         </Table>
        </div>

      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}