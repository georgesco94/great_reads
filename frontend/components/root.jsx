import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { fetchReviews } from '../actions/review_actions';
import { fetchUsers } from '../actions/user_actions';
import { fetchStatuses } from '../actions/status_actions';

import App from './App';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.store.dispatch(fetchReviews());
    this.props.store.dispatch(fetchStatuses());
    this.props.store.dispatch(fetchUsers());
  }

  render(){
    return (
      <Provider store={ this.props.store }>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    );
  }
}

export default Root;
