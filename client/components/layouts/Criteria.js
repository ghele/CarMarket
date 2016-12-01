import React from 'react';
import SearchField from '../views/SearchField';
import BrandDropDown from '../views/BrandDropDown';
import ModelDropDown from '../views/ModelDropDown';

const Criteria = React.createClass( {
  getData () {
    const raoul = this.props.posts
    console.log("Searc",raoul);
  },
  render() {
    return (
      <div>
        <SearchField />
        <BrandDropDown />
        <ModelDropDown />
        <button onClick={this.getData}>Press</button>
      </div>
    );
  }
} );

export default Criteria;