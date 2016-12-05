import React from 'react';

import SearchField from '../views/SearchField';
import BrandDropDown from '../views/BrandDropDown';
import ModelDropDown from '../views/ModelDropDown';

// Criteria
const Criteria = React.createClass( {
  render( ) {
    return (
      <div>
        {/* Include different view components */}
        <SearchField {...this.props} />
        <BrandDropDown {...this.props} />
        <ModelDropDown {...this.props} />
      </div>
    );
  }
} );

export default Criteria;
