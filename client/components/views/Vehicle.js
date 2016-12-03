import React from 'react';
import classNames from 'classnames';
const Vehicle = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("Vehicle",raoul);
  },
  handleOnClick ( ) {
    console.log("Submitting the form");
    // console.log(this.refs.searchText.value);
    const {id} = this.props.item;
    this.props.toggleVehicle(id);
    this.props.toggleCart(id);
    console.log("thisoasfinbo", this.props.posts.items.models[id].isSelected );
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
        <button onClick={this.getData}>SearchField</button>
      </div>
    );
  }
} );

export default Vehicle;
