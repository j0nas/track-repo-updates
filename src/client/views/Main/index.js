import React, {Component} from "react";
import Repositories from "../../components/presentation/table/Repositories";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            repositories: {}
        };

        this.findRepositories = this.findRepositories.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.listenForEnter = this.listenForEnter.bind(this);
    }

    findRepositories() {
        if (!this.state.searchQuery) {
            this.setState({repositories: []});
            return;
        }

        fetch('/api/' + this.state.searchQuery)
            .then(res => res.json())
            .then(res => this.setState({
                repositories: res
            }));
    }

    handleChange(event) {
        this.setState({searchQuery: event.target.value});
    }

    listenForEnter(e) {
        const VK_ENTER = 13;
        if (e.keyCode === VK_ENTER) {
            this.findRepositories();
        }
    }

    render() {
        const {items = []} = this.state.repositories;
        console.log(items[0]);

        return (
            <div>
                <input type="search" value={this.state.searchQuery} onChange={this.handleChange}
                       onKeyDown={this.listenForEnter}/>

                <Repositories items={items}/>
            </div>
        );
    }
}