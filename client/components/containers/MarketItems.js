import React from 'react';

import Vehicles from '../layouts/Vehicles';

const MarketItems = React.createClass( {
  render() {
    return (
      <div className="col-md-9">
        <Vehicles {...this.props} />
      </div>
    );
  }
} );

export default MarketItems;
