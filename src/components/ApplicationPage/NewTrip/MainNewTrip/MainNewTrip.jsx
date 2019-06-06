import React, {Component} from 'react';
import ChooseCountry from './ChooseCountry';

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

let newTripObj = {
    saveCountry: '',
    saveBackpack: [],
    saveDiary: '',
    saveTripPlan: ''
};


export default class MainNewTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryInfo: getLocalStorageData('userCountryChoose') ? getLocalStorageData('userCountryChoose') : '',
            userCountry: '',
            data: !!getLocalStorageData('userCountryChoose'),
            // getLocalStorageData('userCountryChoose') ? true : false,
        }
    }

    countriesInformation = (e) => {
        e.preventDefault();
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url).then(resp => resp.json()).then(data => {
            const result = data.filter((singleCountry) => {
                return singleCountry.name === this.state.userCountry;
            });
            const countryObj = result[0];
            console.log(countryObj);

            this.setState({
                countryInfo: countryObj,
                allCountry: result,
                data: true,
                userCountry:''
            });
        });
        clearLocalStorageData('userCountryChoose');
    };

    userChooseCountry = (e) => {
        console.log(e.target.value);
        this.setState({
            userCountry: e.target.value
        })
    };

    handleSaveClick = () => {
        setLocalStorageData('userCountryChoose', this.state.countryInfo);
        // newTripObj.saveCountry = this.state.countryInfo.name;
        // console.log(newTripObj);
    };


    render() {
        if (!this.state.data) {
            return (
                <div className='mainPage'>
                    <ChooseCountry
                        information={this.countriesInformation}
                        change={(e) => this.userChooseCountry(e)}
                        userCountry={this.state.userCountry}
                        place="KRAJ"
                    />
                </div>
            )

        } else  {
            if (this.state.countryInfo === undefined) {
                return (
                    <div className='mainPage'>
                        <ChooseCountry
                            information={this.countriesInformation}
                            change={(e) => this.userChooseCountry(e)}
                            userCountry={this.state.userCountry}
                            place="NIEPRAWIDŁOWA NAZWA KRAJU"
                        />
                    </div>
                )

            } else {
                const countryInfo = this.state.countryInfo;
                return (
                    <div className='mainPage'>
                        <ChooseCountry
                            information={this.countriesInformation}
                            change={(e) => this.userChooseCountry(e)}
                            userCountry={this.state.userCountry}
                            place="KRAJ"
                        />
                        <div className='informationAboutCountry'>
                            <p>Country: <span>{countryInfo.name}</span></p>
                            <p>Capital: <span>{countryInfo.capital}</span></p>
                            <p>Languages: <span>{countryInfo.languages[0].name}</span>
                            </p>
                            <p>Co-ordinates:</p>
                            <ul>
                                <li>
                                    N: <span>{countryInfo.latlng[0]}</span>
                                </li>
                                <li>
                                    E: <span>{countryInfo.latlng[1]}</span>
                                </li>
                            </ul>
                            <p>Region: <span>{countryInfo.region}</span></p>
                            <p>Subregion: <span>{countryInfo.subregion}</span></p>
                            <p>Currencies: <span>{countryInfo.currencies[0].name}</span></p>
                            <p>TimeZone: <span>{countryInfo.timezones[0]}</span></p>
                        </div>
                        <div className='flag'>
                            <img src={countryInfo.flag}/>
                        </div>
                        <button onClick={this.handleSaveClick} className='save__country'>ZAPISZ</button>
                    </div>
                );
            }
        }
    }
}