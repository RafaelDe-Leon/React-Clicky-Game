import React from 'react';
import './style.css';

const PokemonCard = props => {
  return (
    <div className='card'>
      <div className='img-container'>
        <img
          alt={props.name}
          src={props.image}
          onClick={() => props.handlePicked(props.id)}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
