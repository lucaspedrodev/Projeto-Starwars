import React from 'react';
import './App.css';
import Forms from './Components/Forms';
import Table from './Components/Table';
import Provider from './context/provider';

function App() {
  return (
    <Provider>
      <Forms />
      <Table />
    </Provider>
  );
}

export default App;
