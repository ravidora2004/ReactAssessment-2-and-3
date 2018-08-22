import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TaskTextInput from './TaskTextInput'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

class TaskItem extends React.Component {
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

  handleCancel = () => {
    this.props.history.push({pathname: '/'})
  }

  handleComplete = () => {

    if (this.props.match.params.completed==="true") {
      this.props.completeTodo(this.props.match.params.id,false)
      //strike through label
      
    }else{
      this.props.completeTodo(this.props.match.params.id,true)
    }

    this.props.history.push({pathname: '/'})
  }



  handleDelete = () => {
    this.props.deleteTodo(this.props.match.params.id)
    this.props.history.push({pathname: '/'})
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
    this.props.history.push({pathname: '/'})
  }


render() {

   let element
    if (this.state.editing) {
      element = (

//===============
//Editing
      <div >
        <Table>
              <TableRow>
                  <TableCell > 
                      <Button type="button" size="mini"
                          style={{
                            backgroundColor: "#9E9E9E",
                            fontSize: "10px"
                          }}
                      variant="contained"  align ="center" color="secondary"
                      onClick={() => this.handleCancel()}>&lt; Back to Tasks</Button>
                  </TableCell>
            </TableRow>

            <TableRow >
                <TableCell >
                    <TaskTextInput text={this.props.match.params.title}
                                   editing={this.state.editing}
                                   onSave={(text) => this.handleSave(this.props.match.params.id, text ) } />

                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell> 
                       <Button  variant="contained"  color="primary"   
                            style={{
                              backgroundColor: "#9E9E9E",
                              fontSize: "10px",
                          }}
                          label='Complete'
                          onClick={() => this.handleComplete()}
                          >Toggle Complete</Button >

                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell> 
                      <TextField id="txtDesc" multiline="true"  label="Description" placeholder="Description" >
                      </TextField>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell  > 

                      <Button type="button" size="small"
                          style={{
                            backgroundColor: "#03A9F4",
                            fontSize: "10px"
                            }}
                          variant="contained" align ="center" color="secondary"
                          onClick={(text) => this.handleSave(this.props.match.params.id, text ) }
                      >Save</Button>

                      &nbsp;

                    <Button type="button" size="small"
                        style={{
                          backgroundColor: "#9E9E9E",
                          fontSize: "10px"
                        }}
                        variant="contained"  align ="center" color="secondary"
                        onClick={() => this.handleCancel()} 
                    >Cancel</Button>

                      &nbsp;

                    <Button type="button" className="destroy" size="small"
                          style={{
                            backgroundColor: "#f44336",
                            fontSize: "10px"
                          }}
                          variant="contained"  align ="center" color="secondary"
                          onClick={() => this.handleDelete()}           
                    >Delete</Button>
                </TableCell>
            </TableRow>
         </Table>
      </div>





//===============

      )//if-element
    }  else {
    	element=(

	    <div>
      	<Table>
              <TableRow>
                  <TableCell > 
                      <Button type="button" size="mini"
                          style={{
                            backgroundColor: "#9E9E9E",
                            fontSize: "10px"
                          }}
                      variant="contained"  align ="center" color="secondary"
                      onClick={() => this.handleCancel()}>&lt; Back to Tasks</Button>
                  </TableCell>
            </TableRow>

            <TableRow >
         	      <TableCell >
                        <label onDoubleClick={this.handleDoubleClick}>
                          {this.props.match.params.title}
                        </label>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell> 
                       <Button  variant="contained"  color="primary"   
                          	style={{
              								backgroundColor: "#9E9E9E",
              								fontSize: "10px",
            							}}
                           editing={this.state.editing}
                          label='Complete'
                          onClick={() => this.handleComplete()}
                          >Toggle Complete</Button >

                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell> 
            					<TextField id="txtDesc" multiline="true"  label="Description" placeholder="Description" >
        						  </TextField>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell  > 

        				  		<Button type="button" size="small"
            							style={{
            								backgroundColor: "#03A9F4",
            								fontSize: "10px"
            								}}
            							variant="contained" align ="center" color="secondary"
        							>Save</Button>

        							&nbsp;

        						<Button type="button" size="small"
          							style={{
          								backgroundColor: "#9E9E9E",
          								fontSize: "10px"
          							}}
            						variant="contained"  align ="center" color="secondary"
            						onClick={() => this.handleCancel()} 
        						>Cancel</Button>

        							&nbsp;

        						<Button type="button" className="destroy" size="small"
            							style={{
            								backgroundColor: "#f44336",
            								fontSize: "10px"
            							}}
              						variant="contained"  align ="center" color="secondary"
              						onClick={() => this.handleDelete()}						
        						>Delete</Button>

                </TableCell>
            </TableRow>
         </Table>
      </div>



    		)
    }




	return (

			<div 
				style={{ flex: 1,
					borderRadius: 5,
					backgroundColor: "#dbe3eb",	
					border:"1px solid #aaa"
				}}>
				<br/>
				{element}
			</div>

		) //return

	} //render
} //class

export default TaskItem