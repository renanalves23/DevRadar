import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


//import logo from './logo.svg';
//import './App.css';
// import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS que não interfere no resultado da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)



function App() {
  const [github_username, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
              <label htmlFor="username_github">Usuário do Github</label>
              <input 
               name="github_username"
               id="github_username" 
               required
               value={github_username}
               onChange={e => setGitHubUsername(e.target.value)}
               />
          </div>
          
          <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input 
              name="techs" 
              id="techs" required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>

          <div className="input-group">
          <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
               type="number"
               name="latitude"
               id="latitude"
               required 
               value={latitude} 
               onChange={e => setLatitude(e.target.value)}
               />
          </div>
          
          <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
               type="number" 
               name="longitude"
               id="longitude"
               required 
               value={longitude} 
               onChange={e => setLongitude(e.target.value)}
               />
          </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
     
      <main>
      <ul>
        <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/53740747?s=460&v=4" alt="Renan Alves"/>
              <div className="user-info">
                <strong>Renan Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador/Desenvolvedor WEB</p>
            <a href="https://github.com/renanalves23">Acessar perfil no ithub</a>
        </li>
        <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/53740747?s=460&v=4" alt="Renan Alves"/>
              <div className="user-info">
                <strong>Renan Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador/Desenvolvedor WEB</p>
            <a href="https://github.com/renanalves23">Acessar perfil no github</a>
        </li>
        <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/53740747?s=460&v=4" alt="Renan Alves"/>
              <div className="user-info">
                <strong>Renan Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador/Desenvolvedor WEB</p>
            <a href="https://github.com/renanalves23">Acessar perfil no github</a>
        </li>
        <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/53740747?s=460&v=4" alt="Renan Alves"/>
              <div className="user-info">
                <strong>Renan Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador/Desenvolvedor WEB</p>
            <a href="https://github.com/renanalves23">Acessar perfil no github</a>
        </li>
      </ul>
      </main>
    </div>
  );
}

export default App;
