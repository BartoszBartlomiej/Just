import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packed: 'toPack'
        }
    }

    handlePackedStuff = () => {
        if (this.state.packed === 'toPack') {
            this.setState({
                packed: 'packed'
            })
        } else {
            this.setState({
                packed: 'toPack'
            })
        }
    };

    render() {
        return (
            <li>
                <div className='stuff'>
                    <div className={this.state.packed}>
                    {this.props.item.text}
                    </div>
                    <div>
                        <button className='stuff__btn' onClick={() => this.handlePackedStuff(this.props.item.id)}>
                            <FontAwesomeIcon icon='check'/></button>
                        <button className='stuff__btn' onClick={() => this.props.deleteItem(this.props.item.id)}>
                            <FontAwesomeIcon icon='times'/></button>
                    </div>
                </div>
            </li>
        );
    }
}