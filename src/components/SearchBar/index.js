import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };

    // This binding is necessary to make `this` work in the callback
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState( { value: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <input onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default SearchBar
