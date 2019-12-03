import React, { Component } from 'react';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Wrapper from './components/Wrapper/wrapper';
import Title from './components/Title';
import pokemon from './pokemon.json';
import Navbar from './components/NavBar';
import style from './app.css';

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon,
    clickedPokemon: [],
    topScore: 0,
    score: 0,
    message: '',
    shakeit: 'false'
  };

  handlePicked = id => {
    const shuffledArray = this.shuffleArray(pokemon);
    this.setState({ pokemon: shuffledArray });

    if (this.state.clickedPokemon.includes(id)) {
      this.setState({
        score: 0,
        clickedPokemon: [],
        message: 'Incorrect!! Game Over, Click Pokemon to try again',
        shakeit: 'true'
      });
    } else {
      this.setState({
        clickedPokemon: this.state.clickedPokemon.concat(id),
        score: this.state.score + 1,
        message: 'Correct!!',
        shakeit: 'false'
      });
    }

    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  };

  shuffleArray = picturesArray => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i], picturesArray[j]] = [
        picturesArray[j],
        picturesArray[i]
      ];
    }
    return picturesArray;
  };

  // Map over this.state.pokemon and render a PokemonCard component for each pokemon object
  render() {
    return (
      <Wrapper shakeWrapper={this.state.shakeit}>
        <Navbar />
        <Title>
          Click on the Pokemon, make sure you don't click the same pokemon twice
        </Title>

        <p className='score'>
          <strong>
            score: {this.state.score} | TopScore: {this.state.topScore}
          </strong>
        </p>
        <p className='message'>
          <strong>{this.state.message}</strong>
        </p>

        {this.state.pokemon.map(pokemon => (
          <PokemonCard
            handlePicked={this.handlePicked}
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
