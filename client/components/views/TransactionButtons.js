import React from 'react';

const TransactionButtons = React.createClass( {
  render( ) {
    return (
      <div>
        <button className="btn btn-lg btn-primary">
          <span className="glyphicon glyphicon-shopping-cart"></span>Cart<span className="badge"></span>
        </button>&nbsp;
        <span>
          <button className="btn btn-lg btn-success">Complete</button>
        </span>
      </div>
    );
  }
} );

export default TransactionButtons;
