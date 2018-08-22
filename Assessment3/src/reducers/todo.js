import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS,COMPLETE_TODO } from '../constants/ActionTypes'

const initialState = [

]

export default function todos(state = initialState, action) {
  switch (action.type) {
    // Get to-dos from server
    case GET_TODOS:
      return [ ...action.data ]

    case ADD_TODO:
      return [
        {
          // Id will come with action payload
          // id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          id: action.id,
          completed: action.completed,
          title: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, title: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          // Implemented toggle through task-detail-view
          { ...todo, completed: action.completed } :          
          todo
      )

    default:
      return state
  }
}