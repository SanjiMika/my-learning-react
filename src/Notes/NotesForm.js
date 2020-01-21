import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../redux/actions/actions';

class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            error: '',
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmission = (e) => {
        e.preventDefault();

        let {title, content} = this.state;
        if (!title || !content) {
            this.setState({error: 'Title or Content is not valid'});
            return;
        }

        this.props.addNote(title, content);
        this.setState({title: '', content: '', error: ''});
    };

    render() {
        const {error} = this.state;

        return (
            <React.Fragment>
                <p>Add a Note</p>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <form onSubmit={this.handleSubmission}>
                    Title: <br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/><br/>

                    Content: <br/>
                    <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea><br/>

                    <button type="submit">Add Note</button>
                </form>
            </React.Fragment>
        )
    }

}

export default connect(
    null,
    {
        addNote: addNote
    }
)(NotesForm);
