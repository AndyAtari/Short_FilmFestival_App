import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import UploadContainer from "./containers/UploadContainer";
import Header from "./components/Header";
import QandAContainer from "./containers/QandAContainer";
import LoginContainer from "./containers/LoginContainer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/q&a" component={QandAContainer} />
          <Route exact path="/upload" component={UploadContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
