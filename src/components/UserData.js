import React, {Component} from 'react';
import axios from 'axios';

import UserProfile from './UserProfile';
import UserRepos from './UserRepos';

const PROFILE_URL = 'https://api.github.com/users';
const REPO_URL = 'https://api.github.com/search/users';

class UserData extends Component {
  state = {
    profile: {},
    repos: [],
    loadedProfile: false,
  }

  componentWillReceiveProps({userName}) {
    axios.get(`${PROFILE_URL}/${userName}`)
      .then(res => {
        this.setState({ profile: res.data, loadedProfile: true});
      }).catch(err => {
        this.setState({ loadedProfile: false});
    })
  }

  render() {
    const userData = ( <UserRepos />);
    return (
      <div>
        {this.state.loadedProfile && <UserProfile user={this.state.profile} />}
        {/*{this.state.loaded && <UserProfile user={this.state.profile} />}*/}
      </div>
    );
  }
}

export default UserData;
