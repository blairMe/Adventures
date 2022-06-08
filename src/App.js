import "./App.css";
import NavBar from "./components/NavBar";

import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
        <Router>
          <Route exact path="/" />
        </Router>

    </div>
  );
}

export default App
