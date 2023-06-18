import { StateMachineProvider } from "little-state-machine";
import React from "react";
import Layout from "./layout/Layout";

function App() {
  return (
    <React.Fragment>
      <StateMachineProvider>
        <Layout>
          Hello world
        </Layout>

      </StateMachineProvider>
    </React.Fragment>
  );
}

export default App;
