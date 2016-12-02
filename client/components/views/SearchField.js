import React from 'react';

const SearchField = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("SearchField", raoul);
  },
  handleOnChange( ) {
    console.log("Submitting the form");
    console.log(this.refs.searchText.value);
    const searchText = this.refs.searchText.value;
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
          <button onClick={this.getData}>SearchField</button>
        </div>
      </div>
    );
  }
} );

export default SearchField;
