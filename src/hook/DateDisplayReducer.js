import React, {useEffect, useState, useContext, useReducer} from 'react';
const AppContext = React.createContext({});

const initialState = {
    play: true,
    date: new Date()
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PLAY':
            return {
                ...state,
                date: new Date(),
                play: !state.play
            };
        case 'UPDATE_DATE':
            return {
                ...state,
                date: new Date()
            };
        default:
            return state;
    }
}

const PlayPauseButton = React.memo(function () {
    const {state, dispatch} = useContext(AppContext);
    console.log('render PlayPauseButton');
    return (
        <button onClick={() => dispatch({type: 'TOGGLE_PLAY'})}>
            {state.play ? 'Pause' : 'Play'}
        </button>
    );
});

function DateDisplayReducer() {
    const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.play) {
            const interval = setInterval(
                () => dispatch({type: 'UPDATE_DATE'}),
                1000
            );

            return function () {
                clearInterval(interval);
            }
        }
    }, [state.play]);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <button onClick={() => setCounter(counter + 1)}>
                {`Incrémenter compteur (${counter})`}
            </button>
            <PlayPauseButton/>
            <p>Nous sommes le {state.date.toLocaleString("fr-FR")}</p>
        </AppContext.Provider>
    );
}

export default DateDisplayReducer;
