import * as types from '../constants/ActionTypes';
let TodoId = 0;

export const addTodo = (text) => {
    return {
        type: types.TODO_ADD,
        id: TodoId++,
        text
    };
};

export const deleteTodo = (id) => {
    return {
        type: types.TODO_DELETE,
        id
    };
};

export const toggleTodo = (id) => {
    return {
        type: types.TODO_TOGGLE,
        id
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: types.TODO_FILTER,
        filter
    };
};

export const deleteAllTodos = () => {
    TodoId = 0;
    return { 
        type: types.TODO_DELETE_ALL
    };
};
