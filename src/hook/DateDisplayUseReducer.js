import React, {useEffect, useState, useContext, useReducer, useMemo} from 'react';
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

function DateDisplayUseReducer() {
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

    // Grâce à useMemo, l’objet correspondant à la valeur du contexte restera le même tant que le state n’aura pas été modifié.
    const contextValue = useMemo(
        () => ({state, dispatch}),
        [state, dispatch]
    );

    return (
        <AppContext.Provider value={contextValue}>
            <button onClick={() => setCounter(counter + 1)}>
                {`Incrémenter compteur (${counter})`}
            </button>
            <PlayPauseButton/>
            <p>Nous sommes le {state.date.toLocaleString("fr-FR")}</p>
        </AppContext.Provider>
    );
}

export default DateDisplayUseReducer;
