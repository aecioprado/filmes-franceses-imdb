import './styles/global.css'
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Card } from './components/Card';
import Layout from './components/Layout';
import { Row } from './components/Row';

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
    <>
    <Layout>
      <Navbar />
      <Row>
        <Card/>
        <Card/>
        <Card/>
      </Row>
      
    </Layout>
  </>
  );
}

export default App;
