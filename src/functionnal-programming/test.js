export default function testFunctionalProgramming() {
    console.warn('--------------------- testFunctionalProgramming ------------------');

    const numbers = [1, 2, 3];
    const treatNumber = (number) => {
        return number*2;
    };
    // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    numbers.forEach(treatNumber);
    console.log('numbers', numbers);
    // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
    const newNumbersX2 = numbers.map(treatNumber);
    console.log('newNumbersX2', newNumbersX2);

    // Object function : Object.values ; Object.keys ; Object.entries

    // Functionnal programming 1
    const students = [
        {
            name: "Indrek",
            score: 33.99
        },
        {
            name: "John",
            score: 50.35
        },
        {
            name: "Alice",
            score: 63.35
        }
    ];
    const addScores = (accumulator, currentValue) => Math.round(accumulator + currentValue.score);
    console.log('calcAverageScore', students.reduce(addScores, 0)); //calcAverageScore

    // Functionnal programming 2
    let pets = [
        { name: 'fluffy', color: 'white', age: 6, type: 'dog' },
        { name: 'molly', color: 'brown', age: 9, type: 'cat' },
        { name: 'buster', color: 'black', age: 3, type: 'dog' },
        { name: 'grant', color: 'black', age: 6, type: 'cat' },
        { name: 'pepsi', color: 'grey', age: 4, type: 'dog' },
        { name: 'winston', color: 'brown', age: 8, type: 'dog' },
        { name: 'sprite', color: 'white', age: 10, type: 'cat' },
        { name: 'oscar', color: 'grey', age: 2, type: 'dog' },
        { name: 'bumper', color: 'black', age: 12, type: 'dog' },
        { name: 'happy', color: 'white', age: 11, type: 'dog' },
        { name: 'speedy', color: 'black', age: 9, type: 'cat' }
    ];
    let ageFilter = (pet) => (pet.age > 7);
    let colorFilter = (pet) => (pet.color === 'black');
    let stringMaker = (pet) => `${pet.name} is ${pet.age} years old and is ${pet.color} in color.`;
    console.table(pets.filter(ageFilter).filter(colorFilter).map(stringMaker));

    // Higher Order Function = retourner une fonction supérieure en ajoutant les logiques extensibles dans la fonction originale
    const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
    function mapForEach(arr, fn) {
        const newArray = [];
        for(let i = 0; i < arr.length; i++) {
            newArray.push(
                fn(arr[i])
            );
        }
        return newArray;
    }
    const lenArray = mapForEach(strArray, (item) => {
        return item.length;
    });
    console.log('Higher Order Function (ex: map, filter, reduce) - Custom HOF map function');
    console.table(lenArray); // prints [ 10, 6, 3, 4, 1 ]

    console.warn('--------------------- FIN testFunctionalProgramming ---------------');
}
