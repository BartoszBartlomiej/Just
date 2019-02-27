import React, { Component } from 'react';

import ToDoItems from './ToDoItems';


export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stuff: '',
            stuffToPack: ['dupa', 'dupa','dupa','dupa','dupa',]
        };
    }

    onChange = (e) => {
        this.setState({ stuff: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            stuff: '',
            stuffToPack: [...this.state.stuffToPack, this.state.stuff]
        });
    };

    render() {
        return (
            <div>
                <form className="stuffToPack" onSubmit={this.onSubmit}>
                    <input value={this.state.stuff} onChange={this.onChange} />
                    <button>SPAKUJ</button>
                </form>
                <ToDoItems stuffToPack={this.state.stuffToPack} />
            </div>
        );
    }
}
