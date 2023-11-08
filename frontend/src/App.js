import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Inicio from './pages/inicio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Router>
      <Route exact path='/' component={Inicio}></Route>
    </Router>
    </div>
  );
}

export default App;
