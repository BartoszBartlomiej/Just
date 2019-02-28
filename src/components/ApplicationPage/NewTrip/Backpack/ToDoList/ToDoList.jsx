import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import AddItem from "./AddItem";


function getLocalStorageData(key) {
    if (localStorage.getItem(key) == null) {
        return false;
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}
function setLocalStorageData(key, array) {
    localStorage.setItem("stuffToPack", JSON.stringify(array));
}
function clearLocalStorageData(key) {
    localStorage.removeItem(key);
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stuffToPack: []
        };
    }
    addNewTask = item => {
        if (item === '') {
            return
        }
        const newStuffToPack = [
            ...this.state.stuffToPack,
            { text: item, id: this.state.stuffToPack.length }
        ];
        this.setState({
            stuffToPack: newStuffToPack
        });
        setLocalStorageData("stuffToPack", newStuffToPack);
    };
    componentDidMount() {
        // clearLocalStorageData("stuffToPack");
        const data = getLocalStorageData("stuffToPack")
            ? getLocalStorageData("stuffToPack")
            : [];
        this.setState({
            stuffToPack: data
        });
    }
    deleteSelected = index => {
        const trimmedTasks = this.state.stuffToPack.filter(elem => {
            return elem.id !== index;
        });
        this.setState({
            stuffToPack: trimmedTasks
        });
        setLocalStorageData("stuffToPack", trimmedTasks);
    };
    render() {


        return (
            <div className="App">
                <AddItem handleNewItem={this.addNewTask} />
                <ToDoItems data={this.state.stuffToPack} handleDelete={this.deleteSelected} />
            </div>
        );
    }
}
