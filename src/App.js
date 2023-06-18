import React from "react";
import { StateMachineProvider } from "little-state-machine";
import Layout from "./layout/Layout";
import { routes } from "./routes/routes"

function App(props) {
  console.log(props)
  return (
    <React.Fragment>
      <StateMachineProvider>
        
        

      </StateMachineProvider>
    </React.Fragment>
  );
}

export default App;
