import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as postsActionCreators from '../actions/actionCreators/posts';
import * as searchActionCreators from '../actions/actionCreators/search';
import * as transactionsActionCreators from '../actions/actionCreators/transactions';

import Main from './containers/Main';

function mapStateToProps(state) {
  const  { posts, search, filteredVehicles, cart } = state;

  return {
    posts,
    search,
    filteredVehicles,
    cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( Object.assign( { }, postsActionCreators, searchActionCreators, transactionsActionCreators ), dispatch );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
