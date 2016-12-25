import React, {Component} from "react";
import CustomButton from "../../components/input/CustomButton";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            repositories: {}
        };

        this.findRepositories = this.findRepositories.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    findRepositories() {
        fetch('/api/' + this.state.searchQuery)
            .then(res => res.json())
            .then(res => this.setState({
                repositories: res
            }));
    }

    handleChange(event) {
        this.setState({searchQuery: event.target.value});
    }

    render() {
        const {items = []} = this.state.repositories;
        return (
            <div>
                <input type="text" value={this.state.searchQuery} onChange={this.handleChange}/>
                <br/>
                <CustomButton text="Click me!!" onClick={this.findRepositories}/>
                <ul>
                    {items.map(res => <li>{res.full_name}</li>)}
                </ul>
            </div>
        );
    }
}