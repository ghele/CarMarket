import React from 'react';

import Vehicles from '../layouts/Vehicles';

// MarketItems
const MarketItems = React.createClass( {
  render() {
    return (
      <div className="col-md-9">
        {/* Include the Vehicles layout component */}
        <Vehicles {...this.props} />
      </div>
    );
  }
} );

export default MarketItems;
