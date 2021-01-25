import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import UploadContainer from "./containers/UploadContainer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <h1>Short Film Festival</h1>

        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/upload" component={UploadContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
