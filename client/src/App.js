import {React,useState} from 'react';
import './App.css';
import Home from "./components/home"
import Login from "./components/login"
import Registration from "./components/registration"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
// import postForm from './components/postForm';




function App() {
    const [loginStatus,setLoginStatus]=useState(false)

    const loginStat=()=>{
        setLoginStatus(true)
    }
    
    return(
        <Router>
            <Switch>
                <Route 
                    exact 
                    path="/"
                    render={props=>(
                        <Login {...props} loggeinStatus={loginStatus} loginCB={loginStat} />
                    )}    
                />
                    
                <Route 
                    path="/signup"
                    render={props=>(
                        <Registration {...props} loggeinStatus={loginStatus} loginCB={loginStat} />
                    )}   
                />
                
                <Route 
                    path="/home"  
                    render={props=>(
                        <Home {...props} loggeinStatus={loginStatus} />
                    )}          
                />

            </Switch>
        </Router>
        
    );

    // return (
    //     <div style={{height:"100vh"}} className="p-4 d-flex flex-column flex-md-row w-100 justify-content-around align-items-center">
    //         <Posts />
    //         <PostForm />
    //     </div>
    // );
}

export default App;
