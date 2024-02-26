import React, { useState } from "react";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  const [user, setUser] = useState(null);

  const handleSubmit = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };

  const handleReset = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <Users user={user} onReset={handleReset} />
      ) : (
        <>
          <h1>Pretraži usere</h1>
          <Form onSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
}

export default App;
