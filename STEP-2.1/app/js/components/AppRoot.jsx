import React from 'react';
import { Provider } from 'react-redux';
// COMPONENTsapp
import TodoAdd from './TodoAdd.jsx';
import TodoList from './TodoList.jsx';
import TodoStatus from './TodoStatus.jsx';
// STOREs
import store from '../store';
import router from '../routers';

import { localState, saveState } from '../localStorage';

const VHTodo = () => (
    <div className="container">
      <div className="alert alert-warning" role="alert"> 
        <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but its not super important. 
    </div>
      <div className="row">
        <TodoAdd />
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
        <TodoStatus />
        </div>
        <div className="col-sm-8 col-md-8 col-lg-8">
          <TodoList />
        </div>
      </div>
    </div>
);

export default (
    <Provider store={store}>
      <VHTodo />
    </Provider>
)