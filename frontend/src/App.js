import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <h1>Short Film Festival</h1>
        <h2>Short Film Showcase</h2>
        <h3>My movies</h3>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
