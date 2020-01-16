import React from 'react';
//import logo from './logo.svg';
//import './App.css';
// import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS que não interfere no resultado da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: 



function App() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }


  return (
    <>
    <h1>Contador: 0</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
