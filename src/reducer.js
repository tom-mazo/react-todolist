import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  todos: [
    {
      id: uuidv4(),
      value: 'Wash the dishes'
    },
    {
      id: uuidv4(),
      value: 'Make lunch'
    },
    {
      id: uuidv4(),
      value: 'go to the supermarket'
    },
    {
      id: uuidv4(),
      value: 'bleeh blah bloooooh'
    }
  ],
  focus: null,
}

export function reducer(state, action) {

  switch (action.type) {
    case 'CREATE': {
      const id = uuidv4()
      const value = ""
      return {
        ...state,
        focus: id,
        todos: [
          ...state.todos,
          { value, id }
        ]
      }

    }
    case 'DELETE': {
      const { id } = action.payload
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
      }
    }
    case 'UPDATE': {
      const { id, value } = action.payload
      return {
        focus: null,

        todos: state.todos.map(todo => {
          console.log(todo, id, value)
          if (todo.id === id) {
            return {id, value}
          } else {
            return {id: todo.id, value: todo.value}
          }
        })
      }
    }
    case 'SELECT': {
      const { id } = action.payload
      return {
        ...state,
        focus: id
      }
    }
  }
}