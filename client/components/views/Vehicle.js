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
    console.log("thisoasfinbo", this.props.posts.items.models[vehicleId].isSelected );
  },
  // componentWillReceiveProps() {
  //   console.log("this.propsd", this.props.item[vehicleId].isSelected);
  // },
  render( ) {
    console.log("this.props.item.isSelected", this.props.item.isSelected);
    return (
      <div className="panel panel-default col-xs-12 col-sm-3">
        <div className="panel-heading"> {''+this.props.item.isSelected} {""+this.props.posts.items.models[this.props.item.id].isSelected}
          <span className="glyphicon pull-right glyphicon-star" className={this.props.posts.items.models[this.props.item.id].isSelected ? 'glyphicon pull-right glyphicon-star glyphicon-star':'glyphicon pull-right glyphicon-star glyphicon-star-empty'} onClick={this.handleOnClick}></span>
        </div>
        <div className="panel-body">
          <p>{this.props.item.isSelected}</p>
        </div>


        <button onClick={this.getData}>SearchField</button>


      </div>
    );
  }
} );

export default Vehicle;
