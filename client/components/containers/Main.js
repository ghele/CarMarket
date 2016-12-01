import React from 'react';
import SearchForm from './SearchForm';
import MarketItems from './MarketItems';

const Main = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("this.props",raoul);
  },
  render() {
    return (
      <div>
        <SearchForm {...this.props} />
        <button onClick={this.getData}>Main</button>
        <MarketItems {...this.props} />
      </div>
    );
  }
} );

export default Main;
