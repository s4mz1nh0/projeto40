import React from 'react';
import { useParams } from 'react-router';

const Profile = () => {
  const params = useParams();

  return (
    <div>
      <h1>Profile{params.id}</h1>
    </div>
  );
};

export default Profile;
