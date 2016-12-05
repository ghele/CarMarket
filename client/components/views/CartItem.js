import React from 'react';

// CartItem
const CartItem = React.createClass( {
  handleOnClick ( ) {
    const {id} = this.props.item;

    // call the transaction action creators
    this.props.toggleVehicle(id);
    this.props.toggleCart(id);
  },
  render( ) {
    return (
      <div>
        <ul className="list-group" >
            <li className="list-group-item active">
                <div className="row">
                    <div className="col-xs-10" >
                        <span><b>Brand:</b>{this.props.item.make}</span><br/>
                        <span><b>Model:</b>{this.props.item.name}</span>
                    </div>
                    <div className="col-xs-1">
                        <span aria-hidden="true" className="close" style={{fontSize:'40px'}} onClick={this.handleOnClick}>&times;</span>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    );
  }
} );

export default CartItem;
