import React from 'react';
import SearchField from '../views/SearchField';
import BrandDropDown from '../views/BrandDropDown';
import ModelDropDown from '../views/ModelDropDown';

const Criteria = React.createClass( {
  render() {
    return (
      <div>
        <SearchField />
        <BrandDropDown />
        <ModelDropDown />
      </div>
    );
  }
} );

export default Criteria;
