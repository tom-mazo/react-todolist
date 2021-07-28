import React from "react";
import Todo from './Todo'
import Title from './Title'
import { reducer, initialState } from './reducer'
import styled from 'styled-components'
import 'ress';
import "./style.css";

const List = styled.ul`
  list-style: none;
  padding: 20px;
  margin-bottom: 20px;
`
const RootElement = styled.div`
`
const AddButton = styled.button`
  background-color: #111;
  padding: 10px;
  border-radius: 10px;
  margin-left: 30px;
`

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  
  return (
    <RootElement>
      <Title>Todos</Title>
      <List>
        {state.todos && state.todos.map(todo => {
          return <Todo
            key={todo.id}
            todo={todo}
            select={selectTodo}
            isSelected={ state.focus === todo.id }
            update={updateTodo}
            del={deleteTodo}
            />
        })}
      </List>
        {!state.focus && (<AddButton onClick={createTodo}>Add new task</AddButton>)}
    </RootElement>
  );

  function selectTodo(todo) {
    dispatch({type: 'SELECT', payload: todo})
  }
  function createTodo() {
    dispatch({type: 'CREATE', payload: {}})
  }
  function updateTodo(todo) {
    dispatch({type: 'UPDATE', payload: todo})
  }
  function deleteTodo(todo) {
    dispatch({type: 'DELETE', payload: todo})
  }

}