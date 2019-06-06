import React, {Component} from 'react';
import ToDoList from './ToDoList/ToDoList';

export default class Backpack extends Component {
    render() {
        return (
            <div className='backpack'>
                <ToDoList/>
            </div>
        )
    }
}

