import { useState, ChangeEvent } from 'react'

import { TodoProps } from '../../types/types'

import deleteSvg from '../../assets/delete.svg'
import doneSvg from '../../assets/done.svg'
import doneEditSvg from '../../assets/done2.svg'
import resetSvg from '../../assets/reset.svg'
import editSvg from '../../assets/edit.svg'

import { BlockImagesTodo, DeleteImageTodo, DoneImageTodo, EditImageTodo, EditInput, ResetImageTodo, TextTodoWrapper, TodoContainer, TodoTextBlock } from './todo-item.styles'

const TodoItem = (props: TodoProps) => {
    const { todo: { id, text, status }, deleteTodo, updateStatus, editElement, setEditElementHandler, saveEditedElement } = props;
    const [editableText, setEditableText] = useState(text)

    // Set to useState current editable value
    const editTextHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEditableText(event.currentTarget.value)
    }

    // Function for delete todo
    const deleteTodoHandler = (id: string): void => {
        deleteTodo(id)
    }

    // Update status for todo
    const doneStatusHandler = (id: string, status: string) => {
        updateStatus(id, status)
    }

    // Reset todo status
    const resetTodoHandler = (id: string, status: string) => {
        updateStatus(id, status)
    }

    return (
        <TodoContainer>
            <TextTodoWrapper>
                { 
                    editElement === id ? 
                    <>
                        <EditInput value={editableText} onChange={editTextHandler} />
                    </> :
                    <>
                        <TodoTextBlock className={status === 'done' ? 'done' : ''}>
                            {text}
                        </TodoTextBlock>
                    </>
                }
            </TextTodoWrapper>
            <BlockImagesTodo>
                { status === 'active' && editElement !== id && 
                    <>
                        <DoneImageTodo onClick={() => doneStatusHandler(id, 'done')} src={doneSvg} alt="" />
                        <EditImageTodo onClick={() => setEditElementHandler(id)} src={editSvg} alt="" />
                    </>
                }
                { status === 'done' && <ResetImageTodo onClick={() => resetTodoHandler(id, 'active')} src={resetSvg} alt="" />}
                { editElement === id && <EditImageTodo onClick={() => saveEditedElement(id, editableText)} src={doneEditSvg} alt="" /> } 
                <DeleteImageTodo onClick={() => deleteTodoHandler(id)} src={deleteSvg} alt="" />
            </BlockImagesTodo>
        </TodoContainer>
    )
}

export default TodoItem