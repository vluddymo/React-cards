import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Header>Website Title</Header>
      <MainContent>main</MainContent>
      <Footer>Footer text</Footer>
    </div>
  );
}

export default App;
