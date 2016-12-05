import React from 'react';

// ModelDropDown
const ModelDropDown = React.createClass( {
  handleOnChange( ) {
    const brandName = this.props.search.brandDropdown;
    const modelName = this.refs.modelName.value;
    const modelDropdownCriteria = {
      brandName,
      modelName
    };

    // call the specific search action creator
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
      </div>
    );
  }
} );

export default ModelDropDown;
