import { TodoProps } from '../../types/types'

import deleteSvg from '../../assets/delete.svg'
import doneSvg from '../../assets/done.svg'
import resetSvg from '../../assets/reset.svg'

import { BlockImagesTodo, DeleteImageTodo, DoneImageTodo, ResetImageTodo, TextTodo, TodoContainer } from './todo-item.styles'

const TodoItem = (props: TodoProps) => {
    const { todo: { id, text, status }, deleteTodo, updateStatus } = props;

    const deleteTodoHandler = (id: string): void => {
        deleteTodo(id)
    }

    const doneStatusHandler = (id: string, status: string) => {
        updateStatus(id, status)
    }

    const resetTodoHandler = (id: string, status: string) => {
        updateStatus(id, status)
    }

    return (
        <TodoContainer>
            <TextTodo className={status === 'done' ? 'done' : ''}>
                {text}
            </TextTodo>
            <BlockImagesTodo>
                { status === 'active' && <DoneImageTodo onClick={() => doneStatusHandler(id, 'done')} src={doneSvg} alt="" />}
                { status === 'done' && <ResetImageTodo onClick={() => resetTodoHandler(id, 'active')} src={resetSvg} alt="" />}
                <DeleteImageTodo onClick={() => deleteTodoHandler(id)} src={deleteSvg} alt="" />
            </BlockImagesTodo>
        </TodoContainer>
    )
}

export default TodoItem