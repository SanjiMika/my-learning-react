import React from "react";
import {getNameComponent} from '../utils';

// HOC function (stateful logic component)
const withSearch = (WrappedComponent) => {
    class WithSearch extends React.Component {
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
    WithSearch.displayName = 'WithSearch_'+name;
    return WithSearch;
};

export default withSearch;
