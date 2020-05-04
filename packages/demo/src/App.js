import React from "react";
import "./App.css";

import { ClickableDID } from "@transmute/material-did-core";

function App() {
  return (
    <div className="App">
      <ClickableDID
        did={"did:example:123"}
        onClick={() => {
          alert(1);
        }}
      />
    </div>
  );
}

export default App;
