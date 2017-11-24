import React from 'react';
import ReactDOM from 'react-dom';

import request from 'superagent';

import services from './config/services';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import SearchBar from './components/SearchBar';

import './styles/app.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }

    // If you want to use 'this' in the callback, you should add the following code.
    this.handleTextChange = this.handleTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(gif) {
    this.setState({
      selectedGif: gif,
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      selectedGif: null,
      modalIsOpen: false
    });
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
      .then(gifs => {
        console.log(gifs);
        this.setState({ gifs: gifs });
      });
  }

  render() {
    return (
      <div>
        <SearchBar onTextChange={ this.handleTextChange } />
        <GifList gifs={ this.state.gifs } onSelectGif={ this.openModal } />
        <GifModal modalIsOpen={ this.state.modalIsOpen }
                  selectedGif={ this.state.selectedGif }
                  onRequestClose={ this.closeModal } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
