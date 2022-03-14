
import './App.scss';

// import {  Route,} from 'react-router-dom';
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
import Home from './pages/home'
import savedProfiles  from './pages/savedprofiles';
import DeletedProfiles from './pages/deletedprofiles';

function App() {
  return (
    <Router>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/saved" component={savedProfiles} />
            <Route exact path="/deleted" component={DeletedProfiles} />
            </Switch>
</Router>
    
 
  );
}

export default App;
