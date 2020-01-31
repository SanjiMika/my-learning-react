export default function testFunctionalProgramming() {
    const numbers = [1, 2, 3];

    console.log('--------------------- testFunctionalProgramming ------------------');
// DON'T
    for (let i = 0; i < numbers.length; i++) {
        console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8
    }

// DO : La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
    numbers.map(number => console.log(number)); // 1, 2, 3, 4, 5, 6, 7, 8

// OR : La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    numbers.forEach(number => console.log(number)); // 1, 2, 3, 4, 5, 6, 7, 8

    console.log('--------------------- FIN testFunctionalProgramming ---------------');
}
