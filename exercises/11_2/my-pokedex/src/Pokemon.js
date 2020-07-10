import React from 'react';
import ImagePokemon from './ImagePokemon';
import PokemonProperties from "./PokemonProperties";

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props;
    const properties = {name, type, averageWeight};
    
    return (
      <div className="pokemon" key={id}>
        <PokemonProperties {...properties} />
        <ImagePokemon source={image} name={name} />
        <a className='more-info' href={moreInfo}>More Info</a>
      </div>
    );
  }
}

export default Pokemon;