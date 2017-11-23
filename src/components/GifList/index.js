import React from 'react';
import GifItem from '../GifItem';

const GifList = (props) => {
  const gifItems = props.gifs.map(gif => {
    // In React, if you have multiple components of the same type,
    // you should give each a unique key.
    return <GifItem key={gif.id} gif={gif} />
  })

  return (
    <ul>{gifItems}</ul>
  );
}

export default GifList;
