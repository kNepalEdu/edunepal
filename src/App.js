import React from "react";
import { StateMachineProvider } from "little-state-machine";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/appRoutes";


function App() {
  
  return (
    <React.Fragment>
      <StateMachineProvider>
        <Layout>
          <AppRoutes />
        </Layout>
          
      </StateMachineProvider>
    </React.Fragment>
  );
}

export default App;
