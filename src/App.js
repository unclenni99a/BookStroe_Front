import './App.css';
import Header from './Components/header/header';
import Login from './Components/login/login';
import SignUp from './Components/signup/signup';
import Footer from './Components/footer/footer';
import {Switch,Route} from "react-router-dom";
import Home from './Components/home/home'
function App() {
  return (
    <div className="App">
      <Header/>
          <div id="body"> 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
