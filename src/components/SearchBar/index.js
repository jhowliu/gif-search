import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };

    // This binding is necessary to make `this` work in the callback
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // if you want to signal to React that the state has changed so that it knows to re-render,
    // you need to call this.setState() instead.
    this.setState( { value: event.target.value });
    // SearchBar will emit onTextChange event (pass data to parent components)
    this.props.onTextChange(event.target.value.replace(/\s/g, '+'));
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
