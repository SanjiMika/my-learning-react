import React, {Component} from 'react'
import {connect} from 'react-redux';
import {removeNote} from '../redux/actions/actions';

class AllNotes extends Component {
    removeNote = (index) => {
        this.props.removeNote(index);
    };

    render() {
        const notesItems = this.props.notes.map((note, index) =>
            <li key={index}>
                <b>{note.title}</b>
                <button onClick={() => this.removeNote(index)}>x</button>
                <br/>
                <span>{note.content}</span>
            </li>
        );

        return (
            <React.Fragment>
                <p>All Notes</p>

                <ul>
                    {notesItems}
                </ul>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProprs = {
    removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllNotes);
