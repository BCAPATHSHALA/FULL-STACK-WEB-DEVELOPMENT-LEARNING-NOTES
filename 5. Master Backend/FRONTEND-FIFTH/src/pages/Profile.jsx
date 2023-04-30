import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import MetaData from "../components/MetaData";

const Profile = () => {
  const { loading, user } = useContext(Context);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title={`Profile`} />
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
