import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/Homepage'
import {ItemContextProvider} from "./context/ItemContext";

function App() {
  return (
    <div className="App">
        <ItemContextProvider>
            <Homepage />
        </ItemContextProvider>
    </div>
  );
}

export default App;
