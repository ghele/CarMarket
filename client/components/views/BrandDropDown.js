import React from 'react';

const BrandDropDown = React.createClass( {
  render( ) {
    return (
      <div>
        <label htmlFor="brandName">Select brand</label>
        <select className="form-control">
            <option value="">Select</option>
            <option></option>
        </select>
      </div>
    );
  }
} );

export default BrandDropDown;
