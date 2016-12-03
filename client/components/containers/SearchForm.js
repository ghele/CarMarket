import React from 'react';
import Criteria from '../layouts/Criteria';
import Cart from '../views/Cart';
import TransactionButtons from '../views/TransactionButtons';

const SearchForm = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("this.props SearchForm",raoul);
  },
  render() {
    return (
      <div className="col-md-3">

          <div className="form-group">
            <Criteria {...this.props} />
            <br/>
            <TransactionButtons {...this.props} />
          </div>
          <Cart />
<button onClick={this.getData}>Search Form</button>



      </div>
    );
  }
} );

export default SearchForm;
