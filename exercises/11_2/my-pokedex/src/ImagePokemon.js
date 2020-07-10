import React from 'react';

class ImagemPokemon extends React.Component {
  render() {
    return <img src={this.props.source} alt={`${this.props.name}'s Gif`}/>
  }
}

export default ImagemPokemon;
