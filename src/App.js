import React,{useState,useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Layout from './Hoc/Layout';
import LandingPage from './Pages/LandingPage/LanndingPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import SignIn from './Pages/SignIn/SignIn';
import userContext from './Context/userContext'
function App() {
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
   async function getUser(){
    try {
      const user= await JSON.parse( localStorage.getItem("user"));
      console.log("localstorage user");
      console.log(user);
      if(user){
       setLoginUser(user);
   
      }
    } catch (error) {
      console.log(error);
    }
    
   }
   getUser();
    
  }, [])
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
    <><userContext.Provider value={[loginUser, setLoginUser]}>

      <Layout>
        <Switch>
          <Route path="/signin"> 
            <SignIn/>
          </Route>
        <Route path="/dashboard/:serviceId">
          <AdminPage/>
        </Route>
        <Route path="/" >
        <LandingPage/>
        </Route>
      
        </Switch>
      
      </Layout>
      </userContext.Provider>

    </>
  );
}

export default App;
