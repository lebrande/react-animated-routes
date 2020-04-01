import React from 'react';

const Animal = ({ match }) => {
  const animalId = match.params.id;
  
  return (
    <img
      src={`/img/${match.params.id}.jpg`}
      alt={animalId}
      className="Animal"
    />
  );
}

export default Animal;
