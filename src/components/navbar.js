import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-3">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link App-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link App-link">Create exercise</Link>
                        </li>
                    </ul>
                    <Link to="/user/create" className="nav-link">
                        <i className="fa fa-user fa-align-center"/>
                    </Link>
                </div>
            </nav>
        );
    }
}