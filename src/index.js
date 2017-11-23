import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar'

class App extends React.Component {
  handleTextChange(text) {
    console.log(text);
  }

  render() {
    return (
      <div>
        <SearchBar onTextChange={this.handleTextChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
