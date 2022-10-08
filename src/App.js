import React from 'react';
import Menu from "./Menu";
import Animals from "./Animals";
import Movies from "./Movies";
import Anime from "./Anime";
import StartPage from "./StartPage"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<StartPage/>}>
            </Route>
            <Route path="/menu" element={<Menu/>}>
            </Route>
            <Route path="/animals" element={<Animals/>}>
            </Route>
            <Route path="/movies" element={<Movies/>}>
            </Route>
            <Route path="/anime" element={<Anime/>}>
            </Route>
          </Routes>
      </Router>
  )
}

export default App;