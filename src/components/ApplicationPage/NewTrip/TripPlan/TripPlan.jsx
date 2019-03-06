import React, {Component} from 'react'

function getLocalStorageData(key) {
    if (localStorage.getItem(key) == null) {
        return false;
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}

function setLocalStorageData(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function clearLocalStorageData(key) {
    localStorage.removeItem(key);
}

export default class TripPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planText: '',
        }
    }

    componentDidMount() {
        if (getLocalStorageData('trip-plan') !== false) {
            this.setState({
                planText: getLocalStorageData('trip-plan')
            })
        } else {
            this.setState({
                planText: '',
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            planText: e.target.value
            },
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
            setLocalStorageData('trip-plan', this.state.planText)

    };
    render() {
        return (
            <div>
                <h3>PLAN PODRÓŻY</h3>
                <form className='tripPlan__form'>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.planText}
                    placeholder="Dobry plan to połowa sukcesu udanej podróży! Zapisz swoje pomysły, miejsca które chcesz odwiedzić i wszystko o czym chcesz pamiętać podczas swojej przygody!">
                </textarea>
                    <button className='save__country' onClick={this.handleSubmit}>ZAPISZ</button>
                </form>
            </div>
        )
    }
}
