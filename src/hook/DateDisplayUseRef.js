import React, {useEffect, useState, useRef} from 'react';

function DateDisplayUseRef() {
    const [date, setDate] = useState(new Date());

    // Grâce à useRef on peut ainsi "référencer un élément du DOM" mais également "déclarer une variable d’instance" comme on le ferait avec this.myVar dans une classe
    // useRef = return a Ref Object Mutable
    const btnRef = useRef(null);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        intervalIdRef.current = intervalId;

        return function () {
            clearInterval(intervalId);
        }
    }, []);

    function handleClick() {
        clearInterval(intervalIdRef.current);
        btnRef.current.setAttribute("disabled", "disabled");
    }

    return (
        <>
            <button onClick={handleClick} ref={btnRef}>
                Stop
            </button>
            <p>Nous sommes le {date.toLocaleString("fr-FR")}</p>
        </>
    );
}

export default DateDisplayUseRef;
