import React, { useState, useEffect } from "react";
import Repos from "./Repos";

function Users({ user, onReset }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        if (user && user.repos_url) {
          const res = await fetch(user.repos_url);
          const data = await res.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchRepos();
  }, [user]);

  return (
    <>
      <div className="profile">
        <img src={user.avatar_url} className="repo-img" />
        <h2>{user.name}</h2>
        <p>Location: {user.location}</p>
        <p>Bio: {user.bio}</p>
        <h3>Repos:</h3>
        <ul>
          {repos.map((repo) => (
            <Repos key={repo.id} repo={repo} />
          ))}
        </ul>
        <button className="btnReset" onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Users;
