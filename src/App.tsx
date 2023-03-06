import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

interface Repositorio {
  full_name: string;
  description: string;
}


function App() {


  const [repositorios, setRepositorios] = useState<Repositorio[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/aecioprado/repos')
    .then(resposta => resposta.json())
    .then(data => {
      setRepositorios(data)
  })
  }, [])

  return (
    <ul>
      {repositorios.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
            </li>
        )
      })}
    </ul>
  );
}

export default App;
