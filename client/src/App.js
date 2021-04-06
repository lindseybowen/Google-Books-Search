import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Jumbotron from './components/jumbotron'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Search from './pages/search'
import Saved from './pages/saved'
function App() {
  return (
    <div className="App">
    <Nav/>
    <Jumbotron/>
    <Router>
       <Route exact path="/" component={Search}/>
       <Route exact path="/saved" component={Saved}/> 

    </Router>

    </div>
  );
}

export default App;
