import React, { Component } from "react";

/* Klasni pristup */
class Repos extends Component {
  render() {
    const { repo } = this.props;
    return <li key={repo.id}>{repo.name}</li>;
  }
}

export default Repos;
