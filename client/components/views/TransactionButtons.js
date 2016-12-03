import React from 'react';
import CartItem from './CartItem';

const TransactionButtons = React.createClass( {
  getData () {
    const raoul = this.state;
    console.log("SearchField", raoul);
  },
  getInitialState: function() {
    return { showCart: false };
},
onClick: function() {
    this.setState({ showCart: !this.state.showCart });
},
  render( ) {
    const {cart} = this.props;
    // let showCart = false;
    return (
      <div>
        <button className="btn btn-lg btn-primary" onClick={this.onClick}>
          <span className="glyphicon glyphicon-shopping-cart"></span>Cart&nbsp;
          { cart.length ? <span className="badge">{ cart.length}</span> : false }
        </button>&nbsp;
        <span>
        <button onClick={this.getData}>SearchField</button>
          <button className="btn btn-lg btn-success">Complete</button>
        </span>
        {this.state.showCart ?  <div>
            { !this.props.posts.isFetching ? this.props.cart.map( ( item, i ) => <CartItem {...this.props} key={item.id} item={item} /> ) : true }
          </div>: null}
      </div>
    );
  }
} );

export default TransactionButtons;
