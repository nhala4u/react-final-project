import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, deleteAllTodos } from '../actions';
import * as types from '../constants/ActionTypes';

const Todo = ({ onClick, completed, text, id }) => (
    <li rel="id" className={ completed ? 'list-group-item completed disabled':'list-group-item' } >
        <span className={ completed ? 'glyphicon glyphicon-ok':'glyphicon glyphicon-star-empty' }></span> &nbsp;&nbsp;
        <span style={{ textDecoration: completed ? 'line-through':'none'}}> {text} </span>
        <span className="badge" onClick={onClick}>{ completed ? 'OPEN':'DONE' }</span>
    </li>
);

const TodoList = ({ todos, onTodoClick}) => (
    <ul className="list-group col-md-12">
        {
            todos.map(todo => <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id) } />
        )}
    </ul>
);

const getVisibleTodos = ( todos, filter ) => {
    switch (filter) {
        case types.SHOW_ALL:
            return todos;
        case types.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case types.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);