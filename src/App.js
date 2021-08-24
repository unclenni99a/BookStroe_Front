import './App.css';
import Header from './Components/header/header';
import Login from './Components/login/login';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
        <Login />
      <Footer/>
    </div>
  );
}

export default App;
