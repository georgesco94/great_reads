import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { fetchReviews } from '../actions/review_actions';

import App from './App';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.store.dispatch(fetchReviews());
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
