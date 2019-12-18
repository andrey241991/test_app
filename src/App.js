import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import OfficesPage from './components/OfficesPage';
import ConfirmationComponent from './components/ConfirmationComponent';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <SideBar />
        <OfficesPage />
      </div>
    </div>
  );
}

export default App;
