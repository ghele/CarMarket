import React from 'react';

import SearchForm from './SearchForm';
import MarketItems from './MarketItems';

const Main = React.createClass( {
  render() {
    return (
      <div>
        <SearchForm {...this.props} />
        <MarketItems {...this.props} />
      </div>
    );
  }
} );

export default Main;
