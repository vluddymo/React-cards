import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import Card from "./components/Card/Card";
import ButtonBar from "./components/ButtonBar/ButtonBar";


const cardContent = [
  {
    title: "Pinguine sind lit!",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque debitis eum eveniet excepturi incidunt ipsa labore laboriosam odio quia, quibusdam recusandae reiciendis sed sunt suscipit, temporibus vel vitae! Autem consequuntur dolores ea, nam optio provident quis temporibus voluptatum. Consequuntur?",
    imgSource: "https://cdn.pixabay.com/photo/2012/09/04/21/20/penguin-56101_1280.jpg"
  },
  {
    title: "Eis-Eis-Bärby!",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque debitis eum eveniet excepturi incidunt ipsa labore laboriosam odio quia, quibusdam recusandae reiciendis sed sunt suscipit, temporibus vel vitae! Autem consequuntur dolores ea, nam optio provident quis temporibus voluptatum. Consequuntur?",
    imgSource: "https://cdn.pixabay.com/photo/2015/12/21/13/08/bear-1102605_1280.jpg"
  }
]


function App() {

  const [animal, setAnimal] = React.useState(cardContent[0])

  function switchToPenguin (){
    return setAnimal(cardContent[0])
  }

  function switchToBear (){
    return setAnimal(cardContent[1])
  }

  return (
    <div className="App">
      <Header>Animals of the north pole</Header>
      <MainContent>
        <ButtonBar bear={switchToBear} penguin={switchToPenguin}></ButtonBar>
        <Card cardContent={animal}></Card>
      </MainContent>
      <Footer>Happy footer</Footer>
    </div>
  );
}

export default App;
