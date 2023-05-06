import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
    
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data.data));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <ul>
        {data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;