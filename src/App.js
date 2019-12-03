import React, { Component } from 'react';
import PokemonCard from './components/PokemonCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import pokemon from './pokemon.json';
import Navbar from './components/NavBar';

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon
  };

  // Map over this.state.pokemon and render a PokemonCard component for each pokemon object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title>
          Click on the Pokemon, make sure you don't click the same pokemon twice
        </Title>
        {this.state.pokemon.map(pokemon => (
          <PokemonCard
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
