import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default Todo

const Input = styled.input`
  color: #fff;
  height: 2.5rem;
  border-bottom: 1px #555 solid;
  width: 100%;
`

const LI = styled.li`
  color: #fff;
  height: 2.5rem;
  border-bottom: 1px #555 solid;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const DeleteButton = styled.button`
  background-color: #222;
  padding: 6px;
  border-radius: 4px;
`

function Todo({todo, isSelected, select, update, del}) {
  const [textValue, setTextValue] = React.useState(todo.value)
  const inputEl = React.useRef(null);

  React.useEffect(() => {
    if (!isSelected) return
    inputEl.current && inputEl.current.focus()
  }, [inputEl, isSelected])

  if (isSelected) {
    return <Input ref={inputEl} value={textValue} onChange={onType} onBlur={updateTodo} />
  }



  return (<LI>
      <span onClick={() => { select(todo) }}>{todo.value}</span>
        <DeleteButton onClick={onClickDelete}><FontAwesomeIcon icon={faTrash} color="white" /></DeleteButton>
    </LI>)

  function onType(evt) {
    setTextValue(evt.target.value)
  }

  function updateTodo() {
    update({id: todo.id, value: textValue})
  }

  function onClickDelete() {
    del(todo)
  }
}