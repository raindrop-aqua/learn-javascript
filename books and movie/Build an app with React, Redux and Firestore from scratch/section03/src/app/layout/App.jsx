import React from "react";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <div className='App'>
      <h1>Re-vents</h1>

      <button className='ui icon red button'>
        <i className='user icon' /> CSS Button
      </button>
      <Button icon='user' content='React Buton' color='green' />
    </div>
  );
}

export default App;
