import React, {FC} from 'react';
import './App.css';
import Counter from "./containers/Counter";
import ColorfulBeads from "./containers/ColofulBeads";

const App :FC = () => (

    <div className="container">
      <header>
        <h1>ビーズカウンター</h1>
      </header>
      <Counter/>
      <ColorfulBeads/>
    </div>
);
export default App;
