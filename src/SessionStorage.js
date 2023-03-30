const STORAGE = 'todo-list';

export const getTodoList = () => {
    const todoList = sessionStorage.getItem(STORAGE);
    return todoList? JSON.parse(todoList): [];
};

export const saveTodoList = (todoList) => {
    sessionStorage.setItem(STORAGE, JSON.stringify(todoList));
}