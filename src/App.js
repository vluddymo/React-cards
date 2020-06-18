import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import ButtonBar from "./components/ButtonBar/ButtonBar";
import CardMUI from "./components/CardMUI/CardMUI";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";

const cardContent = [
  {
    title: "Pinguine sind lit!",
    text: "Loading...",
    imgSource: ""
  },
  {
    title: "Eis-Eis-Bärby!",
    text: "Loading...",
    imgSource: ""
  },
  {
    title: "Praise the Polarfuchs!",
    text: "Loading...",
    imgSource: ""
  }
]

async function getData() {
  let url = 'http://localhost:8080/animals';
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
}

function App() {

  const [animal, setAnimal] = React.useState(cardContent[0])

  function switchToPenguin() {
    return getData().then((data) => setAnimal(data[0]))
  }

  function switchToBear() {
    return getData().then((data) => setAnimal(data[1]))
  }

  function switchToFox() {
    return getData().then((data) => setAnimal(data[2]))
  }

  const someEventHandler = () => (window.location = "/animals");

  return (

      <div className="App">
        <Header>Animals of the north pole</Header>
        <MainContent>
          <Router>
            <Switch>
              <Route path="/animals">
                <ButtonBar fox={switchToFox} bear={switchToBear} penguin={switchToPenguin}></ButtonBar>
                <CardMUI cardContent={animal}></CardMUI>
              </Route>
              <Route path="/">
                <div className="divy">
                  <h1>Hey!</h1>
                  <h2>Welcome, fellow north pole enthusiast</h2>
                  <Link to="/animals"><button className="start">Check out some cool north pole animals</button>
                    </Link>
                </div>
              </Route>
            </Switch>
          </Router>
        </MainContent>
        <Footer>Happy footer</Footer>
      </div>

  );
}

export default App;
