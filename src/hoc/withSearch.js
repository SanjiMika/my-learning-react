import React from "react";
import {getNameComponent} from '../utils';

// HOC function (logic component)
const withSearch = (WrappedComponent) => {
    class Search extends React.Component {
        state = {
            searchTerm: ''
        };

        handleSearch = (event) => {
            this.setState({searchTerm: event.target.value})
        };

        render() {
            return (
                <div>
                    <div>
                        <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search"/>
                    </div>
                    <WrappedComponent searchTerm={this.state.searchTerm}/>
                </div>
            )
        }
    }

    const name = getNameComponent(WrappedComponent);
    Search.displayName = 'WithSearch_'+name;
    return Search;
};

export default withSearch;
