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

            console.log(this.state.countryInfo.languages[0].name)

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
                        <p>Country: {countryInfo.name}</p>
                        <p>Capital: {countryInfo.capital}</p>
                        <p>Languages: {countryInfo.languages[0].name}</p>
                        <p>Co-ordinates:</p>
                        <ul>
                            <li>
                                N: {countryInfo.latlng[0]}
                            </li>
                            <li>
                                E: {countryInfo.latlng[1]}
                            </li>
                        </ul>
                        <p>Region: {countryInfo.region}</p>
                        <p>Subregion: {countryInfo.subregion}</p>
                        <p>Currencies: {countryInfo.currencies[0].name}</p>
                        <p>TimeZone: {countryInfo.timezones[0]}</p>
                    </div>
                    <div className='flag'>
                        <img src={countryInfo.flag}/>
                    </div>
                </div>
            );
        }
    }
}


