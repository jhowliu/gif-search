# gif-search

A simple gif-search app using react.

## Introduction 

A Simple Gif search. Use the facebook/create-react-app cli to build the project.

## Usage 

1. <code>yarn install</code>

2. You have to create a src/config/services.js, and go to [Giphy](https://giphy.com/) to get your own token.

- services.js:

<pre>
  const services = {
    giphy: {
      endpoint: 'https://api.giphy.com/v1/gifs/search',
      token: YOUR_OWN_TOKE,
    }
  }

  export default services;
</pre>

3. <code>npm start</code>

4. Open the browser and go to localhost:3000
