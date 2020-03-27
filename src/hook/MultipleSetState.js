import React, {useEffect, useState} from 'react';

/*
Lorsque plusieurs appels à des fonctions de modification sont présentes au sein d'un évènement géré par React (onClick, onChange, onFocus, etc...)
alors la librairie les regroupera et les appliquera en une seule fois pour générer un seul rendu du composant.

Si ces modifications sont effectuées dans un évènement qui n'est pas géré par React (par exemple la fonction de résolution d'une promesse),
alors il y aura autant de rendus du composant que d'appels à une fonction de modification, comme on peut le voir sur l'exemple suivant :
 */
function MultipleSetState() {
    const [var1, setVar1] = useState(0);
    const [var2, setVar2] = useState(0);
    const [var3, setVar3] = useState(0);

    useEffect(() => {
        new Promise(resolve => setTimeout(resolve, 5000))
            .then(() => {
                setVar1(1);
                setVar2(2);
                setVar3(3);
            })
            .catch(() => {
            });
    }, []);

    console.log("render MultipleSetState"); // render 3 differents times because setVar called in then() of Promise
    return <div>{`${var1} + ${var2} = ${var3}`}</div>;
}

/*
Solution : On préférer d'utiliser un object de valeurs state => Optimize setState calling
 */
/*
function SolutionMultipleSetState() {
    const [obj, setObj] = useState({var1: 0, var2: 0, var3: 0});

    function updateVar1(var1) {
        setObj(prevObj => ({...prevObj, var1}));
    }
}
*/

export default MultipleSetState;
