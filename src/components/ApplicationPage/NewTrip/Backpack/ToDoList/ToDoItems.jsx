import React, { Component } from "react";
import Item from "./Item";

export default class ToDoItems extends Component {
    render() {
        return (
            <div className="scroll">
                <ul>
                {this.props.data.map((elem, i) => {
                    return (
                        <Item deleteItem={this.props.handleDelete} key={i} item={elem} />
                    );
                })}
                </ul>
            </div>
        );
    }
}
