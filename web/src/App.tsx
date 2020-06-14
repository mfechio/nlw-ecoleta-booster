import React from 'react';
import './App.css';

// JSX: Sintaxe de XML dentro do Javascript

/*
//
// Código não usado no projeto, apenas para entendimento de componentes e propriedades
//

import Header from './Header';

function App() {

  const [counter, setCounter] = useState(0); // A função use state retorna um array com [valor do estado, função para atualizar o valor do estado]

  function handleButtonClick()
  {
    setCounter(counter + 1);
  }

  return (
        <div>
          <Header title={`Contador: ${counter}`}/>

          <h1>{counter}</h1>

          <button type="button" onClick={handleButtonClick}>Aumentar</button>
        </div>
  );
}*/

import Routes from './routes';

function App()
{
  return (
      <Routes/>
  );
}

export default App;
