import React from 'react';

const BrandDropDown = React.createClass( {
  getData () {
    const raoul = this.props
    const raoul1 = this.refs.brandName.value
    console.log("BrandDropDown",raoul);
    console.log("BrandDropDownref",raoul1);
  },
  handleOnChange( ) {
    console.log("Submitting the form");
    console.log(this.refs.brandName.value);
    const brandName = this.refs.brandName.value;
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
        <button onClick={this.getData}>BrandDropDown</button>
      </div>
    );
  }
} );

export default BrandDropDown;
