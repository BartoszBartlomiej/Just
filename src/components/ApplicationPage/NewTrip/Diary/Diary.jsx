import React, {Component} from 'react';

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


export default class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryText: '',
        }
    }

    componentDidMount() {
        if (getLocalStorageData('diary') !== false) {
            this.setState({
                diaryText: getLocalStorageData('diary')
            })
        } else {
            this.setState({
                diaryText: '',
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            diaryText: e.target.value
            },
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        setLocalStorageData('diary', this.state.diaryText)

    };
    render() {
        return (
            <div>
                <h3>DZIENNIK POKŁADOWY</h3>
                <form className='tripPlan__form'>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.diaryText}
                    placeholder="W trakcie podróży wiele się dzieje i czasami mogą Ci umknąć pewne wspomnienia. Zapisz najlepsze momenty w dzienniku pokładowym, aby o żadne wspomnienie Ci nie umknęło.">
                </textarea>
                    <button className='save__country' onClick={this.handleSubmit}>ZAPISZ</button>
                </form>
            </div>
        )
    }
}
