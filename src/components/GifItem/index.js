import React from 'react'

const GifItem = (props) => {
  console.log(props.gif.url);
  return (
    <div className="gif-item">
      <img src={props.gif.url} />
    </div>
  );
}

export default GifItem;
