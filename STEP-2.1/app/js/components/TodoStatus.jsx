import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <li role="presentation" className="active"><a href='javscript:void(0);'>{children}</a></li>;
    }

    return (
        <li role="presentation" onClick={e => {
            e.preventDefault();
            onClick();
        }}>
            <a href='javscript:void(0);'>{children}</a>
        </li>
    );
};

const mapStateProps = (state, ownProps) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    };
};
const mapDispatchProps = (dispatch,ownProps) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    };
};

const TodoOption = connect(
    mapStateProps,
    mapDispatchProps
)(Link);

export default () => (
    <ul className="nav nav-pills nav-stacked nav-pills-stacked-example">
        <TodoOption filter='SHOW_ALL'><i className="glyphicon glyphicon-th-list"></i> &nbsp;ALL</TodoOption>
        <TodoOption filter='SHOW_ACTIVE'><i className="glyphicon glyphicon-star"></i> &nbsp;ACTIVE</TodoOption>
        <TodoOption filter='SHOW_COMPLETED'><i className="glyphicon glyphicon-ok"></i> &nbsp;COMPLETED</TodoOption>
    </ul>
);