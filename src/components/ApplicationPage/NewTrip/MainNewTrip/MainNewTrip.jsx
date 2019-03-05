import React, {Component} from 'react';

export default class MainNewTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryInfo: '',
            userCountry: '',
            data: false,
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
                data: true
            });
            this.setState({
                userCountry: ''
            });
        });
    };

    userChooseCountry = (e) => {
        console.log(e.target.value);
        this.setState({
            userCountry: e.target.value
        })
    };

    render() {
        if (!this.state.data) {
            return (
                <div className='mainPage'>
                    <form onSubmit={this.countriesInformation}>
                        <input onChange={(e) => this.userChooseCountry(e)} placeholder='KRAJ'
                               value={this.state.userCountry}/>
                    </form>
                </div>
            )
        } else {
            const countryInfo = this.state.countryInfo;
            return (
                <div className='mainPage'>
                    <div className='inputChooseCountry'>
                        <form onSubmit={this.countriesInformation}>
                            <input onChange={(e) => this.userChooseCountry(e)} placeholder='KRAJ'
                                   value={this.state.userCountry}/>
                        </form>
                    </div>
                    <div className='informationAboutCountry'>
                        <p>Country: <span>{countryInfo.name}</span></p>
                        <p>Capital: <span>{countryInfo.capital}</span></p>
                        <p>Languages: <span>{countryInfo.languages[0].name}</span></p>
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
                    <button className='save__country'>ZAPISZ</button>
                </div>
            );
        }
    }
}


