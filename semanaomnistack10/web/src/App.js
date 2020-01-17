import React, { useState } from 'react';

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
  const [counter, setCounter] = useState(0); //utilizamos desestruturação, pq o useState necessita de 2 valores



  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
              <label htmlFor="username_github">Usuário do Github</label>
              <input name="github_username" id="github_username" required/>
          </div>
          
          <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
          <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
          </div>
          
          <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
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
