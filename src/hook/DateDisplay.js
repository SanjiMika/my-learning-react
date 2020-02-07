import React, {useEffect, useState, useCallback} from 'react';

/*Explanation :
    - 1e render -> effect
    - 2e render -> clean effect -> new effect
    - 3e render -> clean effect -> new effect
*/

// React.memo = PureComponent in ClassComponent
const Button = React.memo(function({onClick, children}) {
    console.log('render Button');
    return <button onClick={onClick}>{children}</button>
});

function DateDisplay() {
    const [play, setPlay] = useState(true);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (play) {
            console.log('set newInterval');
            const interval = setInterval(() => setDate(new Date()), 1000);

            return function() {
                console.log('cleanup effect');
                clearInterval(interval);
            }
        }
    }, [play]);

    const handleClickPlay = useCallback(
        function() {
            console.log('value play in callback handleClickPlay', play);
            setPlay(!play);
            setDate(new Date());
        },
        [play]
    );

    console.warn('render DateDisplay');
    return (
        <div>
            <Button onClick={handleClickPlay}>{play ? 'Pause' : 'Play'}</Button>
            <p>
                Nous sommes le {date.toLocaleString("fr-FR")}
            </p>
        </div>
    );
}

export default DateDisplay;
