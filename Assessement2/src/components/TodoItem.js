import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }


  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } 
  }

  render() {


    const { todo, completeTodo, deleteTodo } = this.props

    let element

      element = (

        <div className="view">
                <table>
                  <tr>
                      <td width ="50%"> 
                          <label>
                              {todo.text}
                          </label>                      
                      </td>
                      <td width ="10%" align ="center">
                        <input className="button"
                            value ="Complete"
                            type="button"
                            checked={todo.completed}
                            onClick={() => completeTodo(todo.id)}/>

                        <button type="button"  onClick={() => completeTodo(todo.id)}></button>
                      </td>
                      <td width ="5%" align ="center">
                          <button type="button" className="destroy"
                          onClick={() => deleteTodo(todo.id)} />          
                      </td>
                  </tr>
                </table>

        </div>


      )


    return (
      <li className={classnames({
        completed: todo.completed
      })}>
        {element}
      </li>
    )
  }
}