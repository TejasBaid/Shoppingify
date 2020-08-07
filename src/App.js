import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/Homepage'
import {ItemContextProvider} from "./context/ItemContext";
import {ListContextProvider} from "./context/ListContext";

function App() {
  return (
    <div className="App">
        <ItemContextProvider>
            <ListContextProvider>
                <Homepage />
            </ListContextProvider>
        </ItemContextProvider>
    </div>
  );
}

export default App;
