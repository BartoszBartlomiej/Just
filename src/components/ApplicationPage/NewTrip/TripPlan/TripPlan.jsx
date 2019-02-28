import React, {Component} from 'react'

export default class TripPlan extends Component {
    render() {
        return (
            <div>
                <h3>PLAN PODRÓŻY</h3>
                <form>
                    <textarea
                        placeholder="Dobry plan to połowa sukcesu udanej podróży! Zapisz swoje pomysły, miejsca które chcesz odwiedzić i wszystko o czym chcesz pamiętać podczas swojej przygody!">

                    </textarea>
                </form>
            </div>
        )
    }
}