import React from 'react';
import convertCurrency from './currency';

class CurrencyConvert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            componentState: 'loading',
            result: '',
        };
    }

    componentDidMount() {
        convertCurrency('USD', 'HRK', 20)
            .then((data) => {
                this.setState({componentState: 'success', result: data})
            })
            .catch((e) => {
                console.warn('Error in fnc convertCurreny : ', e.message);
                this.setState({componentState: 'failed'});
            })
    }

    render() {
        const {componentState, result} = this.state;

        return (
            <React.Fragment>
                {
                    componentState === 'loading'
                        ?
                        <p>Loading ...</p>
                        :
                        componentState === 'failed'
                            ?
                            <p>Error in the server communication :(</p>
                            :
                            <p>{result}</p>
                }
            </React.Fragment>
        )
    }
}

export default CurrencyConvert;
