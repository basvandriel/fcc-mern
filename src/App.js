import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/navbar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-exercise';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <img src={logo} className="App-logo" alt="logo"/>

                <Route path="/" component={ExercisesList}/>
                <Route path="/edit/:id" component={EditExercise}/>
                <Route path="/create" component={CreateExercise}/>
                <Route path="/user/create" component={CreateUser}/>
            </Router>
        </div>
    );
}

export default App;
