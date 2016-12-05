import React from 'react';

import Criteria from '../layouts/Criteria';
import TransactionButtons from '../views/TransactionButtons';

// SearchForm
const SearchForm = React.createClass( {
  render() {
    return (
      <div className="col-md-3">
          <div className="form-group">
            {/* Include layout and view components */}
            <Criteria {...this.props} />
            <br/>
            <TransactionButtons {...this.props} />
          </div>
      </div>
    );
  }
} );

export default SearchForm;
