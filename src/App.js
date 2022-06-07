import "./App.css";
import NavBar from "./components/NavBar";

import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter ></BrowserRouter>
      <Router>
          <Route exact path="/" element={<NavBar />}/>
      </Router>
    </>
  );
}

export default App;
