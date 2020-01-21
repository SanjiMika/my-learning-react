import {ADD_NOTE, REMOVE_NOTE} from "../actions/actions";

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
