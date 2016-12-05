import React from 'react';

import SearchField from '../views/SearchField';
import BrandDropDown from '../views/BrandDropDown';
import ModelDropDown from '../views/ModelDropDown';

const Criteria = React.createClass( {
  render( ) {
    return (
      <div>
        <SearchField {...this.props} />
        <BrandDropDown {...this.props} />
        <ModelDropDown {...this.props} />
      </div>
    );
  }
} );

export default Criteria;
