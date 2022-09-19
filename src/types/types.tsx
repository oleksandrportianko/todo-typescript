export type Todo = {
    id: string,
    text: string,
    status: string,
}

export type TodoProps = {
    todo: Todo,
    deleteTodo: (id: string) => void,
    updateStatus: (id: string, status: string) => void,
}

export type DateObject = {
    day: string,
    month: string,
    weekDay: string,
}