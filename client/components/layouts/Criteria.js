import React from 'react';
import SearchField from '../views/SearchField';
import BrandDropDown from '../views/BrandDropDown';
import ModelDropDown from '../views/ModelDropDown';

const Criteria = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("Searc",raoul);
  },
  render( ) {
    return (
      <div>
        <SearchField />
        <BrandDropDown {...this.props} />
        <ModelDropDown {...this.props} />
        <button onClick={this.getData}>Criteria</button>
      </div>
    );
  }
} );

export default Criteria;
