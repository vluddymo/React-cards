import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import ButtonBar from "./components/ButtonBar/ButtonBar";
import CardMUI from "./components/CardMUI/CardMUI";
import {Link, Switch, Route} from "react-router-dom";

const cardContent = [
  {
    title: "This Goat wants you to choose",
    text: "goat it ?",
    imgSource: "http://placegoat.com/500/350"
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


  return (

      <div className="App">
        <Header>Animals of the north pole</Header>
        <MainContent>
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
        </MainContent>
        <Footer>Happy footer</Footer>
      </div>

  );
}

export default App;
