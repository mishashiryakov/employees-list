import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/Home';
import { Employees } from './components/Employees';
import './index.css';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/employees">Сотрудники</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
