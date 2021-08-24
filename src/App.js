import './App.css';
import Header from './Components/header/header';
import Login from './Components/login/login';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id="body">
        <Login />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
