import React, {Component} from 'react';
import axios from 'axios';

import UserProfile from './UserProfile';
import UserRepos from './UserRepos';

const URL = 'https://api.github.com/users';

class UserData extends Component {
  state = {
    profile: {},
    repos: [],
    loadedProfile: false,
    loadedRepos: false,
  }

  componentWillReceiveProps({userName}) {
    axios.get(`${URL}/${userName}`)
      .then(res => {
        this.setState({ profile: res.data, loadedProfile: true});
      }).catch(err => {
        this.setState({ loadedProfile: false});
    });
  }

  showRepo = () => {
    if(this.state.profile.public_repos) {
      axios.get(`${URL}/${this.props.userName}/repos`)
        .then(res => {
          this.setState({ repos: res.data, loadedRepos: true});
        }).catch(err => {
        this.setState({ loadedRepos: false});
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.loadedProfile && <UserProfile user={this.state.profile} />}
        {this.state.loadedProfile && <button onClick={this.showRepo} className="btn btn-primary">Repos</button>}
        {this.state.loadedRepos && <UserRepos repos={this.state.repos} />}
      </div>
    );
  }
}

export default UserData;
