import React from 'react';
import SearchForm from './SearchForm';

const Main = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("this.props",raoul);
  },
  render() {
    return (
      <div>
        <SearchForm />
        <button onClick={this.getData}>Press</button>
      </div>
    );
  }
} );

export default Main;
