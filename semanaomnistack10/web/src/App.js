import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
// import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS que não interfere no resultado da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: 



function App() {
  const [counter, setCounter] = useState(0); //utilizamos desestruturação, pq o useState necessita de 2 valores

  function incrementCounter() {
    setCounter(counter + 1);
  }


  return (
    <>
<h1>Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
