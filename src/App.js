import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import Card from "./components/Card/Card";


function App() {
  return (
    <div className="App">
      <Header>Peng, Peng, Penguin</Header>
      <MainContent>
        <Card></Card>
      </MainContent>
      <Footer>Happy footer</Footer>
    </div>
  );
}

export default App;
