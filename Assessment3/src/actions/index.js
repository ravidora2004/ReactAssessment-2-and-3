import * as types from '../constants/ActionTypes'
import superagent from 'superagent'


const BASE_URL = 'https://practiceapi.devmountain.com/api/tasks/'


export const addTodo = text => {
  return dispatch => {
    return superagent
      .post(`${BASE_URL}`)
      .send({ title: text, completed: false })
      .end((err, res) => dispatch({ type: types.ADD_TODO, id: res.body.id, title: text, completed: true }))
  }
}


export const deleteTodo = id => {
  return dispatch => {
    return superagent
      .delete(`${BASE_URL}${id}`)
      .end((err, res) => dispatch({ type: types.DELETE_TODO, id:id }))
  }
}

export const editTodo = (id, text) => {
  return dispatch => {
    return superagent
      .patch(`${BASE_URL}${id}`)
      .send({ id: id ,title: text })
      .end((err, res) => dispatch({ type: types.EDIT_TODO, id:id, text: text }))
  }
}


export const completeTodo = (id, state) => {
  return dispatch => {
    return superagent
      .patch(`${BASE_URL}${id}`)
      .send({ completed: state })
      .end((err, res) => dispatch({ type: types.COMPLETE_TODO, id: id, completed: state }))
  }
}

// New get function
export const getTodos = () => {
  return dispatch => {
    return superagent
        .get(`${BASE_URL}`)
        .end((err, res) => {
          if (err)
            dispatch({ type: types.GET_TODOS, data: [] })
          else
            dispatch({ type: types.GET_TODOS, data: res.body })
        })
  }
}