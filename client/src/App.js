import { Route } from 'react-router-dom';
import './App.css';
import LandPage from './Components/LandPage'
import Home from './Components/Home'
import CountryDetail from './Components/CountryDetail'
import Activity from './Components/Activity'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandPage}/>
      <Route path="/countries" exact component={Home}/>
      <Route path="/countries/:id" component={CountryDetail}/>
      <Route path="/activiy" component={Activity}/>
    </div>
  );
}

export default App;
