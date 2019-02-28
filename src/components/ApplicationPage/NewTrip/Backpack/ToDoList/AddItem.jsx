import React, {Component} from "react";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (typeof this.props.handleNewItem === "function") {
            this.props.handleNewItem(this.state.taskName);
            this.setState({
                taskName: ''
            })
        }
    };
    handleChange = e => {
        this.setState({
            taskName: e.target.value
        });
    };

    render() {
        return (
            <div className='stuffToPack'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.taskName}/>
                    <input className='button' type="submit" value='SPAKUJ'/>
                </form>
            </div>
        );
    }
}
