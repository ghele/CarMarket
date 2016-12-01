import React from 'react';
import Vehicles from '../layouts/Vehicles';

const MarketItems = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("this.props",raoul);
  },
  render() {
    return (
      <div className="col-md-9">
        <button onClick={this.getData} >Market Items</button>
        <Vehicles {...this.props} />
      </div>
    );
  }
} );

export default MarketItems;
