import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as types from '../constants/ActionTypes';

const todo = (state, action) => {
    switch (action.type) {
        case types.TODO_ADD:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case types.TODO_DELETE:
            if (state.id !== action.id) {
                return state;
            };
        case types.TODO_DELETE_ALL:
            return state;
        case types.TODO_TOGGLE:
            if (state.id !== action.id) {
                return state;
            };

        return {
            ...state,
            completed: !state.completed,
            deleted: !state.deleted
        };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
   let TodoSource = [];
   let TodoData = JSON.stringify(state);
    switch (action.type) {
        case types.TODO_ADD:

            TodoSource.push(TodoData);
            localStorage.setItem('todos', TodoSource);
            return [
                ...state,
                todo(undefined, action)
            ];
            
        case types.TODO_DELETE:
            return state.map(t =>
                todo(t, action)
            );
        case types.TODO_DELETE_ALL:
            return state.map(t =>
                todo(t, action)
            );
        case types.TODO_TOGGLE:
            TodoSource.push(TodoData);
            localStorage.setItem('todos', TodoSource);
            return state.map(t =>
                todo(t, action)
            );
        default:
            
            let TodoStorage = JSON.parse(localStorage.getItem('todos') || '[]');
            console.log(TodoStorage);
            return state = TodoStorage
  }
};

const visibilityFilter = (
    state = types.SHOW_ALL,
    action
) => {
    switch (action.type) {
        case types.TODO_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    logger
});

const logger = (store) => (next) => (action) => {
    const result = next(action);
    console.log(store.getState);
    return result;
};

export default createStore(todoApp)