import React from 'react';
import { DataFetcher } from './components/DataFetcher'; 
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <DataFetcher />
    </div>
  );
};

export default App;
