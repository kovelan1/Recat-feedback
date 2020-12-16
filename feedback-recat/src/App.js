import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Dashboard from './Components/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
