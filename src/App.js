
import './App.css';
import Homepage from './Containers/Homepage';
import Loginpage from './Containers/Loginpage';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/login" component={Loginpage}/>
    </Switch>
  );
}

export default App;
