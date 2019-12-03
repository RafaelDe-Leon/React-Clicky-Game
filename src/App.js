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

  removeFriend = id => {
    // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
    const pokemon = this.state.pokemon.filter(pokemon => pokemon.id !== id);
    // Set this.state.pokemon equal to the new friends array
    this.setState({ pokemon });
  };

  // Map over this.state.pokemon and render a PokemonCard component for each pokemon object
  render() {
    return (
      <Wrapper>
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
