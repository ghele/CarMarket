import React from 'react';
import classNames from 'classnames';

// Vehicle
const Vehicle = React.createClass( {
  handleOnClick ( ) {
    const {id} = this.props.item;

    // call the transaction action creators
    this.props.toggleVehicle(id);
    this.props.toggleCart(id);
  },
  render ( ) {
    const toggleClass = classNames( {
      'glyphicon pull-right glyphicon-star': true,
      'glyphicon pull-right glyphicon-star glyphicon-star-empty': !this.props.posts.items.models[this.props.item.id].isSelected
    } );

    return (
      <div className="panel panel-default col-xs-12 col-sm-3">
        <div className="panel-heading"> {this.props.item.make}
          <span className={toggleClass} onClick={this.handleOnClick}></span>
        </div>
        <div className="panel-body">
          <p>{this.props.item.name}</p>
        </div>
      </div>
    );
  }
} );

export default Vehicle;
