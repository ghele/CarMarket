import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postsActionCreators from '../actions/actionCreators/posts';
import * as searchActionCreators from '../actions/actionCreators/search';
import Main from './containers/Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    search: state.search,
    filteredVehicles: state.filteredVehicles 
  }
}

console.log("mapStateToProps", mapStateToProps({}));

function mapDispatchToProps(dispatch) {
  return bindActionCreators( Object.assign( { }, postsActionCreators, searchActionCreators ), dispatch );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
