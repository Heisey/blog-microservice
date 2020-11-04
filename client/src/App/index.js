import React from 'react'
import { posts } from '../components'
import './App.css';

function App() {
  return (
    <div className="App container">
      <posts.Create />
      <posts.List />
    </div>
  );
}

export default App;
