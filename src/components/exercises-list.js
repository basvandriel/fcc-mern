import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date}</td>
        <td>
            <button className='btn btn-link pl-0'>
                <Link to={"/edit/" + props.exercise._id}>Edit</Link>
            </button>
            <button className='btn btn-link' onClick={() => props.deleteAction(props.exercise._id)}>Delete</button>
        </td>
    </tr>
);

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.state = {exercises: []};

        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises').then(res => {
            this.setState({exercises: res.data})
        }).catch((error) => {
            console.log(error);
        });

    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' + id).then(res => console.log(res.data));

        this.setState({exercises: this.state.exercises.filter(el => el._id !== id)});
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration (in minutes)</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.exercises.map(exercise => {
                            return <Exercise exercise={exercise} deleteAction={this.deleteExercise} key={exercise._id}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}