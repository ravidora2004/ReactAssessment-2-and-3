import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

import Button from '@material-ui/core/Button';



export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
           
    }
  }

  render() {
    return (
      <header className="header">
        <h1>TO-DO:</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                        />

    <p/>
        <Button variant="contained" color="primary" type="submit" 
                
                      style={{
                backgroundColor: "#03A9F4",
                fontSize: "10px"
              }}
             // onClick={() => this.handleSave("Direct Text")}
        >Add new To-do</Button> 
     <p/>


      </header>
    )
  }
}