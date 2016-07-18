import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import * as types from '../constants/ActionTypes';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
            <div>
                {this.props.children} // This must be exactly one element or it will warn.
            </div>
        );
    }
});

const NoMatch = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
          <div>
            {this.props.children} // This must be exactly one element or it will warn.
          </div>
        );
    }
});

function routes(history) {
    return (
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                <IndexRoute component={App} />
                <Route path="/all" component={types.SHOW_ALL} />
                <Route path='/active' component={types.SHOW_ACTIVE} />
                <Route path='/completed' component={types.SHOW_COMPLETED} />
                <Redirect from='*' to={NoMatch} />
            </Route>
        </Router>
    )
}

export default routes;