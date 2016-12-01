import React from 'react';
import Vehicle from '../views/Vehicle';

const Vehicles = React.createClass( {
  getData () {
    const raoul = this.props
    console.log("Vehicles",raoul);
  },
  render( ) {
    return (
      <div>
        { !this.props.posts.isFetching ? this.props.posts.items.models.map( ( post, i ) => <Vehicle {...this.props} key={post.id} post={post} /> ) : true }
        <button onClick={this.getData}>Vehicles</button>
      </div>
    );

  }
} );

export default Vehicles;
