// a simple function to add something
const add = (n) => (n + 10);
add(9);

// a simple memoized function to add something
const memoizedAdd = () => {
    // Technique closures : une fonction qui utilise des variables indépendantes (utilisées localement mais définies dans la portée englobante)
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            // console.log('Calculating new result');
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }
};

// same memoize function from before
const memoize = (fn) => { // Technique HOF : return a enhanced function
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache for', n);
            return cache[n];
        }
        else {
            console.log('Calculating result for', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
};
const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);

export default function testMemoize() {
    console.warn('--------------------- testMemoize ------------------');
    // returned function from memoizedAdd
    const newAdd = memoizedAdd(); // execute fnc to return contexte closures
    newAdd(9);	// calculated
    // console.log(newAdd(9));	// cached

    console.log('Result factorial 2', factorial(2)); // calculated
    console.log('Result factorial 3', factorial(3)); // calculated for 3 and cached for 2
    // console.log('Result factorial 4', factorial(4)); // calculated for 4 and cached for 3

    console.warn('--------------------- FIN testMemoize ------------------');
}
