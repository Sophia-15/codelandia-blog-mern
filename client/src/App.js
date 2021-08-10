import Home from './pages/Home';
import Create from './pages/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
