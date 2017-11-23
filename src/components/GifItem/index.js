import React from 'react'

const GifItem = (props) => {
  console.log(props.gif.url);
  return (
    <li>
      <img src={props.gif.url} />
    </li>
  );
}

export default GifItem;
