import React from 'react';

const TransactionButtons = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("SearchField", raoul);
  },
  render( ) {
    const {cart} = this.props;
    return (
      <div>
        <button className="btn btn-lg btn-primary">
          <span className="glyphicon glyphicon-shopping-cart"></span>Cart
          { cart.length ? <span className="badge">{ cart.length}</span> : false }
        </button>&nbsp;
        <span>
          <button className="btn btn-lg btn-success">Complete</button>
        </span>
        <button onClick={this.getData}>TransactionButtons</button>
      </div>
    );
  }
} );

export default TransactionButtons;
