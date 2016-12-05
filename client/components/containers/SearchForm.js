import React from 'react';

import Criteria from '../layouts/Criteria';
import TransactionButtons from '../views/TransactionButtons';

const SearchForm = React.createClass( {
  render() {
    return (
      <div className="col-md-3">
          <div className="form-group">
            <Criteria {...this.props} />
            <br/>
            <TransactionButtons {...this.props} />
          </div>
      </div>
    );
  }
} );

export default SearchForm;
