import React from 'react';
import Criteria from '../layouts/Criteria';
import Cart from '../views/Cart';
import TransactionButtons from '../views/TransactionButtons';

const SearchForm = React.createClass( {
  render() {
    return (
      <div className="col-md-3">

          <div className="form-group">
            <Criteria />
            <br/>
            <TransactionButtons />
          </div>
          <Cart />
          



      </div>
    );
  }
} );

export default SearchForm;
