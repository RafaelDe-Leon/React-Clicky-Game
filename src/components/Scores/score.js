import React from 'react';

const Scores = props => (
  <div className='score'>
    {props.type}: {props.score}
  </div>
);

export default Scores;
