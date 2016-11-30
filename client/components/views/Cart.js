import React from 'react';

const Cart = React.createClass( {
  render( ) {
    return (
      <div>
        <ul className="list-group" >
            <li className="list-group-item active">
                <div className="row">
                    <div className="col-xs-10" >
                        <span><b>Brand:</b>  </span><br/>
                        <span><b>Model:</b>  </span>
                    </div>
                    <div className="col-xs-1">
                        <span aria-hidden="true" className="close" style={{fontSize:'40px'}}>&times;</span>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    );
  }
} );

export default Cart;
