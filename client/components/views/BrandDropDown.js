import React from 'react';

// BrandDropDown
const BrandDropDown = React.createClass( {
  handleOnChange( ) {
    const brandName = this.refs.brandName.value;

    // call the specific search action creator
    this.props.filterAfterBrandDropdown(brandName);
  },
  render( ) {
    return (
      <div>
        <label htmlFor="brandName">Select brand</label>
        <select className="form-control" ref="brandName" onChange={this.handleOnChange} disabled={this.props.search.searchText}>
            <option value="">Select</option>
            { !this.props.posts.isFetching ? this.props.posts.items.name.map( ( name, i ) => <option key={i}>{name}</option> ) : true }
        </select>
      </div>
    );
  }
} );

export default BrandDropDown;
