import React from 'react';

import Vehicle from '../views/Vehicle';

const Vehicles = React.createClass( {
  render( ) {
    return (
      <div>
        { !this.props.posts.isFetching ? this.props.filteredVehicles.map( ( item, i ) => <Vehicle {...this.props} key={item.id} item={item} /> ) : true }
      </div>
    );
  }
} );

export default Vehicles;
