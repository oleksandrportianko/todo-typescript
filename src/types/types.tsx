export type Todo = {
    id: string,
    text: string,
    status: string,
}

export type TodoProps = {
    todo: Todo,
    deleteTodo: (id: string) => void,
    updateStatus: (id: string, status: string) => void,
    editElement: string,
    setEditElementHandler: (id: string) => void,
    saveEditedElement: (id: string, text: string) => void,
    handleKeyDownOnUpdate: (id: string, text: string) => void,
}

export type DateObject = {
    day: string,
    month: string,
    weekDay: string,
}

export type User = {
    id: string,
    displayName: string,
    email: string,
}

export type FirebaseUser = {
    uid: string,
    displayName: string,
    email: string,
}