import './output.css'
import './index.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import initialData from './data/initialData.json';

function App() {
  return (
    <div className="App">
      <Dashboard initialData={initialData} />
    </div>
  );
}

export default App;