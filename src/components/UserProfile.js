import React from 'react';
import dateformat from 'dateformat';

const UserProfile = ({user}) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img className="img-thumbnail github-avatar" src={user.avatar_url} />
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          <li className="list-group-item"><strong>Username: </strong>{user.login}</li>
          <li className="list-group-item"><strong>Company: </strong>{user.company || '-'}</li>
          <li className="list-group-item"><strong>Email: </strong>{user.email || '-'}</li>
          <li className="list-group-item"><strong>Followers: </strong>{user.followers}</li>
          <li className="list-group-item"><strong>Updated at: </strong>{dateformat(user.updated_at) || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
