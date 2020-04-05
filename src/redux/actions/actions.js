export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

// what is action ? it's a function which return an obj {type, payload)
export function addNote(title, content) {
    return {
        type: ADD_NOTE,
        payload: {
            title: title,
            content: content
        }
    };
}

export function removeNote(id) {
    return {
        type: REMOVE_NOTE,
        payload: {id: id}
    };
}
