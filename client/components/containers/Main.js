import React from 'react';

import SearchForm from './SearchForm';
import MarketItems from './MarketItems';

// Main
const Main = React.createClass( {
  render() {
    return (
      <div>
        {/* Include different container components */}
        <SearchForm {...this.props} />
        <MarketItems {...this.props} />
      </div>
    );
  }
} );

export default Main;
