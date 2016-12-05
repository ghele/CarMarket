import React from 'react';

import Vehicle from '../views/Vehicle';

// Vehicles
const Vehicles = React.createClass( {
  render( ) {
    return (
      <div>
        {/* Show the filtered vehicles using the Vehicle view component */}
        { !this.props.posts.isFetching ? this.props.filteredVehicles.map( ( item, i ) => <Vehicle {...this.props} key={item.id} item={item} /> ) : true }
      </div>
    );
  }
} );

export default Vehicles;
