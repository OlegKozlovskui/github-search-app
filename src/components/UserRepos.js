import React, {Component} from 'react';

class UserRepos extends Component {
  renderRepo(repos) {
    if(repos.length) {
      return repos.map((repo, i) => {
        return(
          <tr key={repo.id}>
            <th scope="row">{i + 1}</th>
            <td>{repo.name}</td>
            <td>{repo.description || '-'}</td>
            <td>{repo.url}</td>
            <td>{repo.forks}</td>
            <td>{repo.watchers}</td>
          </tr>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h3 className="title">Repo list</h3>
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Url</th>
            <th scope="col">Forcs count</th>
            <th scope="col">Watchers count</th>
          </tr>
          </thead>
          <tbody>
            {this.renderRepo(this.props.repos)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserRepos;
