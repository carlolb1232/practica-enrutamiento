import './App.css';
import{
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Number from './Components/Number';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/:hello/:blue/:red" render={(routeProps) => <Hello routeProps={routeProps}/>} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/:number" render={(routeProps) => <Number routeProps={routeProps}/>} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
