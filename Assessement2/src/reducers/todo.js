import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
  } from '../constants/ActionTypes'
  
  const initialState = [
    {
      text: 'Finally take out the trash',
      completed: true,
      id: 0,
    },
      {
        text: 'Take the dog for a walk',
        completed: false,
        id: 1,
      } ,
    {
      text: 'Take my sister out for lunch',
      completed: false,
      id: 2,
    },
    {
      text: 'Do the to-do list design',
      completed: false,
      id: 3,
    },
    {
      text: 'Get ready for the day',
      completed: false,
      id: 4,
    }
  ]
  
  export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
  
      case DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case COMPLETE_TODO:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
  
      default:
        return state
    }
  
  
  }