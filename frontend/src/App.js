import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import UploadContainer from "./containers/UploadContainer";
import Header from "./components/Header";
import WatchlistContainer from "./containers/WatchlistContainer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/watchlist" component={WatchlistContainer} />
          <Route exact path="/upload" component={UploadContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
