import React, { Component } from 'react';
import data from './../../data';


class Image extends Component {
  render() {
    const {profilePicture, firstName, lastName} = this.props;
    return (
      <div className="imgWrapper">
        <img className = "img" src={profilePicture} alt={firstName+ ' '+lastName} />
      </div>
    );
  }
}

export default Image;