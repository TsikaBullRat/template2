import './App.css';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Quick_donate } from './components/Quick_donate';
import { Banner } from './components/Banner';
import { Tablets } from "./components/Tablets"
/*import Banner from './components/Banner';*/

function App() {
  return (
    <div className="container-fluid">
      <Quick_donate />

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" render={props =>
            <div>
              <Banner />
              <Tablets />
            </div>
          }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
