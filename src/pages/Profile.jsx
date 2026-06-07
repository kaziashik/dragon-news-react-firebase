import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <div className="flex flex-col items-center gap-4">

        <img
          className="w-32 h-32 rounded-full"
          src={user?.photoURL}
          alt=""
        />

        <h2 className="text-2xl font-bold">
          {user?.displayName}
        </h2>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Verified:</strong>
          {user?.emailVerified ? " Yes" : " No"}
        </p>

        <p>
          <strong>UID:</strong> {user?.uid}
        </p>

      </div>
    </div>
  );
};

export default Profile;