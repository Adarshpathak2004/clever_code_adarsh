import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./HomePage";
import HomePage from "./component/homePage"
import UsernameForm from "./component/userNameForm";
import UserDetails from "./component/userDetails";
import Problems from "./component/problems";
import Wrapped from "./component/wrapped";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for Username Form */}
        <Route path="/user" element={<UsernameForm />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/problems/:username/:tag" element={<Problems />} />
        <Route path="/wrapped" element={<Wrapped />} />
      </Routes>
    </Router>
  );
}

export default App;
