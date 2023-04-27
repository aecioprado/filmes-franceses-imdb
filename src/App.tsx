import './styles/App.css'
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Poster } from './components/Poster';

interface Repositorio {
  full_name: string;
  description: string;
}


function App() {


  const [repositorios, setRepositorios] = useState<Repositorio[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/aecioprado/repos')
    .then(resposta => {
      setRepositorios(resposta.data)
  })
  }, [])

  return (
    <div>
      <Navbar />
      <Poster/>
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
  </div>
  );
}

export default App;
