import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header>Website Title</Header>
      <MainContent>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </MainContent>
      <Footer>Footer text</Footer>
    </div>
  );
}

export default App;
