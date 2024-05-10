import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>list</h1>
      <ul>
        {
        users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;