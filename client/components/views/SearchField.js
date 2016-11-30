import React from 'react';

const SearchField = React.createClass( {
  render( ) {
    return (
      <div>
        <label htmlFor="searchCar">Search</label>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
          <span className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-search"></span>
          </span>
        </div>
      </div>
    );
  }
} );

export default SearchField;
