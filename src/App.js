import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import './App.css';
import Browser from './pages/Browser';
import Recipe from './pages/Recipe';
import 'antd/dist/antd.css';
// import data from './data.json'
import data from './data2.json';

const theme = {
  light_main: "#ffffff",
  light_accent: "#9edbd8",
  dark_main: "#aaaaaa",
  dark_accent: "#9edbd8"
}

const Container = styled.div`
  display: flex;
`

const MainItem = styled.div`
  flex-grow: 4;
`

const SecondaryItem = styled.div`
  flex-grow: 0;
  width: 20%;
`



function App() {
  const [recipe, setRecipe] = useState(data.recipes[0])
  // console.log(data.recipes[0])
  // setRecipe(data.recipes[0])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <SecondaryItem><Browser setRecipe={setRecipe} recipeData={data} /></SecondaryItem>
          <MainItem><Recipe setRecipe={setRecipe} recipeData={recipe} recipeList={data}/></MainItem>
          {/* <SecondaryItem><Browser setRecipe={setRecipe} recipeData={data}/></SecondaryItem> */}
        </Container>
      </ThemeProvider>

    </div>
  );
}

export default App;
