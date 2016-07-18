import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteAllTodos } from '../actions';

let TodoAdd = ({ dispatch }) => {
    let input;

    return (
        <div className="col-lg-12 col-mdg-12 col-sm-12">
            <input className="form-control" required ref={node => {
                input = node;
            }} />
            <br />
            <button className="btn btn-primary" onClick={() => {
                
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                ADD NEW
            </button>
            
            <button className="btn btn-danger" onClick={() => {
                dispatch(deleteAllTodos());
            }}>
                DELETE ALL
            </button>
        </div>
    );
};
export default connect()(TodoAdd);