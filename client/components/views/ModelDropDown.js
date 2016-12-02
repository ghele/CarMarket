import React from 'react';

const ModelDropDown = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("ModelDropDown",raoul);
  },
  handleOnChange( ) {
    console.log("Submitting the form");
    console.log(this.props.search.brandDropdown);
    console.log(this.refs.modelName.value);
    const brandName = this.props.search.brandDropdown;
    const modelName = this.refs.modelName.value;
    const modelDropdownCriteria = {
      brandName,
      modelName
    }
    this.props.filterAfterModelDropdown(modelDropdownCriteria);
  },
  render( ) {
    return (
      <div>
        <label htmlFor="modelName">Select model</label>
        <select className="form-control" ref="modelName" onChange={this.handleOnChange} disabled={!this.props.search.brandDropdown}>
            <option value="">Select</option>
            { !this.props.posts.isFetching ? this.props.filteredVehicles.map( ( model ) => <option key={model.id}>{model.name}</option> ) : true }
        </select>
        <button onClick={this.getData}>ModelDropDown</button>
      </div>
    );
  }
} );

export default ModelDropDown;
