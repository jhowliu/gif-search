import React from 'react';
import ReactDOM from 'react-dom';

import request from 'superagent';

import services from './config/services';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    }
    // If you want to use 'this' in the callback, you should add the following code.
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    const payload = {
      api_key: services.giphy.token,
      q: text,
    };

    request
      .get(services.giphy.api)
      .query(payload)
      .then(res => { return res.body.data; })
      .then(data => {
        console.log(data);
        return data.map(gif => {
          return { id: gif.id, url: gif.images.downsized.url }
        });
      }).then(gifs => {
        this.setState({ gifs: gifs });
      });
  }

  render() {
    return (
      <div>
        <SearchBar onTextChange={this.handleTextChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
