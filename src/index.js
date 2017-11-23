import React from 'react';
import ReactDOM from 'react-dom';

import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [
        { id: 1, url: 'https://cdn.free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg' },
        { id: 2, url: 'https://cdn.free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg' },
      ]
    }
  }

  handleTextChange(text) {
    console.log(text);
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
