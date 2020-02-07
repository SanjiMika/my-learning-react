import React, {useEffect, useState} from 'react';

/*Explanation :
    - 1e render -> effect
    - 2e render -> clean effect -> new effect
    - 3e render -> clean effect -> new effect
*/
function DateDisplay() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('new effect');
        const intervalId = setInterval(() => setDate(new Date()), 3000);

        return function() {
            console.log('cleanup last effect');
            clearInterval(intervalId);
        };
    });

    console.warn('render DateDisplay');
    return <p>Nous sommes le {date.toLocaleString("fr-FR")}</p>;
}

export default DateDisplay;
