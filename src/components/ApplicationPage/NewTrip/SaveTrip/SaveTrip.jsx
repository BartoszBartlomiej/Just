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



// function saveToLocalStorage(newObject) {
//
//     let allUserTrips = [];
//
//     if (localStorage.getItem("newTripObj") != null) {
//         allUserTrips = JSON.parse(localStorage.getItem("newTripObj"));
//
//         allUserTrips.push(newObject);
//         localStorage.setItem("newTripObj", JSON.stringify(allUserTrips));
//     } else {
//
//         allUserTrips.push(newObject);
//         localStorage.setItem("newTripObj", JSON.stringify(allUserTrips));
//     }
// }



let newTripObj = {
    saveCountry: '',
    saveBackpack: [],
    saveDiary: '',
    saveTripPlan: ''
};

export default class SaveTrip extends Component {


    handleSaveTrip = () => {
        newTripObj.saveCountry = getLocalStorageData('userCountryChoose');
        newTripObj.saveBackpack.push(getLocalStorageData('stuffToPack'));
        newTripObj.saveTripPlan = getLocalStorageData('trip-plan');
        newTripObj.saveDiary = getLocalStorageData('diary');
        console.log(newTripObj);
        setLocalStorageData('newTripObj', newTripObj);
        // saveToLocalStorage(newTripObj)


    };


    render() {
        return (
            <button onClick={this.handleSaveTrip}> zapisz podróź</button>
        );
    }
}

