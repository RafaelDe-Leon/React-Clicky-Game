import React, { Component } from 'react';
import FriendCard from './components/PokemonCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import pokemon from './pokemon.json';

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon
  };

  removeFriend = id => {
    // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
    const pokemon = this.state.pokemon.filter(pokemon => pokemon.id !== id);
    // Set this.state.pokemon equal to the new friends array
    this.setState({ pokemon });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Pokemon List</Title>
        {this.state.pokemon.map(pokemon => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
