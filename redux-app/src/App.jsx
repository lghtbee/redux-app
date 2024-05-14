import React from 'react';
import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <CounterComponent />
      <UserComponent />
    </div>
  );
}

export default App;
