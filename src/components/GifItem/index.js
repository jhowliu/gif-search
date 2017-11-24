import React from 'react'

const GifItem = (props) => {
  return (
    <div className="gif-item">
      <img src={ props.gif.images.downsized.url }
           // If you want to pass params, you should use the following code.
           // onClick={ props.onSelectGif(props.gif) } => execute the function directly. (X)
           onClick={ () => { props.onSelectGif(props.gif) } }/>
    </div>
  );
}

export default GifItem;
