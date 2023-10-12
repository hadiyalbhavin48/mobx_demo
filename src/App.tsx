import React from 'react';
import './App.css';
import { Count } from './mobx_demo/Components/Count';
import { GithubUserDetails } from './mobx_demo/Components/GithubUserDetails';
function App() {
  return (
    <div className="App">
      <h1>Jay Swaminarayan</h1>
      <Count />
      <GithubUserDetails />
    </div>
  );
}

export default App;
