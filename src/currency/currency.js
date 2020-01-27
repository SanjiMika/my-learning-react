import axios from 'axios';

const getExchangeRate = async (fromCurrency, toCurrency, amount) => {
    const {data} = await axios.get(`http://api.currencylayer.com/convert?access_key=3a591ac60bff6a028610c73b90b2937c&from=${fromCurrency}&to=${toCurrency}&amount=${amount}&format=1`);
    console.log("data fetching from api.currencylayer.com/convert", data);

    // after 3s for resolving result
    return new Promise(resolve => {
        setTimeout(async () => {
            try {
                resolve('60');
            } catch (e) {
                throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
            }
        }, 3000);
    });
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map(country => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    // ==Début séquentiel==   Inconvenient : result of convertedAmount and countries are independent
    // const convertedAmount = await getExchangeRate(fromCurrency, toCurrency, amount);
    // const countries = await getCountries(toCurrency);
    // return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;

    // ==Exécution parallèle avec await Promise.all==   Avantage : run 2 fnc in parallel
    const results = await Promise.all([
        (async()=>await getExchangeRate(fromCurrency, toCurrency, amount))(),
        (async()=>await getCountries(toCurrency))()
    ]);

    const convertedAmount = results[0];
    const countries = results[1];
    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
};

export default convertCurrency;
