import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/Homepage'
import {ItemContextProvider} from "./context/ItemContext";
import {ListContextProvider} from "./context/ListContext";
import {IsSignedInProvider} from "./context/IsSignedIn";
import {AuthContextProvider} from "./context/AuthContext";

const App = () => {
  return (
    <div className="App">
        <ItemContextProvider>
            <ListContextProvider>
                <IsSignedInProvider>
                    <AuthContextProvider>
                        <Homepage />
                    </AuthContextProvider>
                </IsSignedInProvider>
            </ListContextProvider>
        </ItemContextProvider>
    </div>
  );
}

export default App;
