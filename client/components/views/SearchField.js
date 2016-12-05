import React from 'react';

// SearchField
const SearchField = React.createClass( {
  handleOnChange( ) {
    const searchText = this.refs.searchText.value;

    // call the specific search acion creator
    this.props.filterAfterSearchField(searchText);
  },
  render( ) {
    return (
      <div>
        <label htmlFor="searchText">Search</label>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" ref="searchText" onChange={this.handleOnChange} disabled={this.props.search.brandDropdown}/>
          <span className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-search"></span>
          </span>
        </div>
      </div>
    );
  }
} );

export default SearchField;
