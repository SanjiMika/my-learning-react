import {useState, useEffect} from "react";
import axios from 'axios';

function useDataFetching(dataSource, refresh) {
    const [state, setState] = useState({loading: true, results: [], error: ''});

    useEffect(() => {
        setState({loading: true, results: [], error: ''});

        async function fetchData() {
            try {
                const {data} = await axios.get(dataSource);

                if (data) {
                    setState(state => ({...state, loading: false, results: data}))
                }
            } catch (error) {
                setState(state => ({...state, loading: false, error: error.message}))
            }
        }

        fetchData();
    }, [dataSource, refresh]);

    return state;
}

export default useDataFetching;
