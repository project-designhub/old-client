import React, { Component } from 'react';
import axios from 'axios';

export class Onboard extends Component {
  state = {
    username: '',
    full_name: '',
    bio: '',
    location: '',
    website: ''
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user`, this.state, {
        headers: { Authorization: localStorage.token }
      })
      .then(res => {
        console.log(res);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <h1>Onboarding</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
            placeholder="Username"
            required
          />
          <input
            type="text"
            name="full_name"
            value={this.state.full_name}
            onChange={this.handleChanges}
            placeholder="Full name"
          />
          <input
            type="text"
            name="bio"
            value={this.state.bio}
            onChange={this.handleChanges}
            placeholder="bio"
          />
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChanges}
            placeholder="location"
          />
          <input
            type="text"
            name="website"
            value={this.state.website}
            onChange={this.handleChanges}
            placeholder="website"
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Onboard;
