import React from 'react';

const ModelDropDown = React.createClass( {
  render( ) {
    return (
      <div>
        <label htmlFor="modelName">Select model</label>
        <select className="form-control">
            <option value="">Select</option>
            <option></option>
        </select>
      </div>
    );
  }
} );

export default ModelDropDown;
