import React from 'react';

const Vehicle = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("Vehicle",raoul);
  },
  render( ) {
    return (
      <div className="panel panel-default col-xs-12 col-sm-3">
        <div className="panel-heading"> {this.props.post.make}
          <span className="glyphicon pull-right glyphicon-star"></span>
        </div>
        <div className="panel-body">
          <p>{this.props.post.name}</p>
        </div>        
      </div>
    );
  }
} );

export default Vehicle;
