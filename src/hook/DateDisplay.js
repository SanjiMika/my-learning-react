import React, {useEffect, useState} from 'react';

/*Explanation :
    - 1e render -> effect
    - 2e render -> clean effect -> new effect
    - 3e render -> clean effect -> new effect
*/
function DateDisplay() {
    const [play, setPlay] = useState(true);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('run effect only when play is changed');
        if (play) {
            const interval = setInterval(() => setDate(new Date()), 1000);

            return function() {
                console.log('cleanup effect');
                clearInterval(interval);
            }
        }
    }, [play]);

    function handleClick() {
        setPlay(!play);
        setDate(new Date());
    }

    console.warn('render');
    return (
        <div>
            <button onClick={handleClick}>
                {play ? 'Pause' : 'Play'}
            </button>
            <p>
                Nous sommes le {date.toLocaleString("fr-FR")}
            </p>
        </div>
    );
}

export default DateDisplay;
