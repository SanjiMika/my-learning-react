import React, {useEffect, useState, useRef, useCallback} from 'react';

function useInterval(timeout, getValue) {
    const [value, setValue] = useState(getValue);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(
            () => setValue(getValue()),
            timeout
        );
        intervalIdRef.current = intervalId;

        return function () {
            clearInterval(intervalId);
        }
    }, [timeout, getValue]);

    const handleClick = useCallback(function () {
        if (intervalIdRef.current) {
            setValue(getValue());
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        } else {
            setValue(getValue());
            intervalIdRef.current = setInterval(
                () => setValue(getValue()),
                timeout
            );
        }
    }, [timeout, getValue]);

    return [value, intervalIdRef.current !== null, handleClick];
}

const getCurrentDate = () => new Date();

function DateDisplayCustomHook() {
    const [date, executing, handleClick] = useInterval(1000, getCurrentDate);

    console.log('render DateDisplayCustomHook');
    return (
        <>
            <button onClick={handleClick}>
                {executing ? <p>Stop</p> : <p>Play</p>}
            </button>
            <p>Nous sommes le {date.toLocaleString("fr-FR")}</p>
        </>
    );
}

export default DateDisplayCustomHook;
