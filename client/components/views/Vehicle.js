import React from 'react';

const Vehicle = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("Vehicle",raoul);
  },
  handleOnClick( ) {
    console.log("Submitting the form");
    // console.log(this.refs.searchText.value);
    const vehicleId = this.props.item.id;
    this.props.toggleVehicle(vehicleId);
  },
  render( ) {
    return (
      <div className="panel panel-default col-xs-12 col-sm-3">
        <div className="panel-heading"> {this.props.item.make} {this.props.item.id}
          <span className="glyphicon pull-right glyphicon-star" onClick={this.handleOnClick}></span>
        </div>
        <div className="panel-body">
          <p>{this.props.item.name}</p>
        </div>
      </div>
    );
  }
} );

export default Vehicle;
