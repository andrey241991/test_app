import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import OfficesPage from './components/OfficesPage';
import AddNewOffice from './components/AddNewOffice';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        {/* <SideBar/>
        <OfficesPage/> */}
        <AddNewOffice/>
      </div>
    </div>
  );
}

export default App;
