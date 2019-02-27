import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'toPack'
        }
    }

    handleCheckButton = (e) => {
        this.setState({
            class: 'packed'
        })
    };


    handleRemoveButton = () => {


    };

    render() {
        const backpackStuff = this.props.stuffToPack.map((elem, index) => {
            return (
                <div className='stuff'>
                    <li className={this.state.class} key={index}>{elem}</li>
                    <div>

                        <button
                            onClick={(e) => this.handleCheckButton(e, index)}
                            className='stuff__btn'
                        >
                            <FontAwesomeIcon icon='check'/>
                        </button>

                        <button className='stuff__btn'><FontAwesomeIcon icon='times'/></button>
                    </div>
                </div>
            )
        });

        return (
            <ul>
                {backpackStuff}
            </ul>
        )
    }
}


