import React, {Component} from 'react';


export default class ChooseCountry extends Component {
    render() {
        return (
            <div>
                <div className='chooseCountry'>
                    <div className='yourChoose'>
                        <p>WYBIERZ KRAJ PODRÓŻY</p>
                        <input/>
                        <p>WPISZ NAZWĘ PODRÓŻY</p>
                        <input/>
                    </div>
                </div>
            </div>
        )
    }


}