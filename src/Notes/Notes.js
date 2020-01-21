import React from 'react'
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';

export default class Notes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4>React Redux Notes App</h4>

                <NotesForm/>
                <p>-----------------------------------</p>
                <AllNotes/>
            </React.Fragment>
        )
    }
}
