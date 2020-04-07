import {ADD_NOTE, REMOVE_NOTE} from "../actions/actions";

// what is reducer ? : it' a function with the arguments : (state, action) which return nextState
const notesReducer = (notes = [], {type, payload}) => {
    switch (type) {
        case ADD_NOTE:
            return [
                ...notes,
                {
                    title: payload.title,
                    content: payload.content
                }
            ];
        case REMOVE_NOTE:
            return notes.filter((note, index) => index !== payload.id);
        default:
            return notes;
    }
};

export default notesReducer;
