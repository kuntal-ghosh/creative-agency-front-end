import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Layout from './Hoc/Layout';
import LandingPage from './Pages/LandingPage/LanndingPage';
import AdminPage from './Pages/AdminPage/AdminPage';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Layout>
        <Switch>
        <Route path="/customer-dashboard">
          <AdminPage/>
        </Route>
        <Route path="/" >
        <LandingPage/>
        </Route>
      
        </Switch>
      
      </Layout>
    </>
  );
}

export default App;
