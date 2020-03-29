import React, {useState} from "react";
import useDataFetching from "./useDataFetching";

function Repositories() {
    console.log('render Repositories');

    let [refresh, setRefresh] = useState(0);
    const {loading, results, error} = useDataFetching("https://api.github.com/users/royderks/repos", refresh);

    let infoHelping = null;
    if (loading || error) {
        infoHelping = loading ? "Loading..." : error;
    }

    return (
        <>
            <div>
                Repositories List &nbsp;
                <button onClick={() => {
                    setRefresh(refresh => refresh += 1)
                }}>
                    Refresh
                </button>
            </div>
            {infoHelping ? infoHelping :
                <ul>
                    {results.map(({id, html_url, full_name}) => (
                        <li key={id}>
                            <a href={html_url} target="_blank" rel="noopener noreferrer">
                                {full_name}
                            </a>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}

export default Repositories;
