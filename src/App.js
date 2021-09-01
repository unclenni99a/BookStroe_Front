import './App.css';
import Header from './Components/header/header';
import Login from './Components/login/login';
import SignUp from './Components/signup/signup';
import Footer from './Components/footer/footer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import history from './history';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router history={history}>
          <div id="body"> 
            <Switch>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </Router>      
      <Footer/>
    </div>
  );
}

export default App;
