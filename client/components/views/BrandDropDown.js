import React from 'react';

const BrandDropDown = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("BrandDropDown",raoul);
  },
  render( ) {
    return (
      <div>
        <label htmlFor="brandName">Select brand</label>
        <select className="form-control">
            <option value="">Select</option>
            { !this.props.posts.isFetching ? this.props.posts.items.name.map( ( name, i ) => <option key={i}>{name}</option> ) : true }
        </select>
        <button onClick={this.getData}>BrandDropDown</button>
      </div>
    );
  }
} );

export default BrandDropDown;
