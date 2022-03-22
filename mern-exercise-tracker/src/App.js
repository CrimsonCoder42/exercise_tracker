import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Routes>
      <Route path="/" exact component={ ExercisesList } />
      <Route path="/edit/:id" component={ EditExercise } />
      <Route path="/create" component={ CreateExercise } />
      <Route path="/user" component={ CreateUser } />
    </Routes>
  
  );
}

export default App;
