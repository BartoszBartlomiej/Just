import React, {Component} from 'react';


export default class Diary extends Component {

    render() {
        return (
            <div>
                <h3>Dziennik pokładowy</h3>
                <form>
                    <textarea
                        placeholder="W trakcie podróży wiele się dzieje i czasami mogą Ci umknąć pewne wspomnienia. Zapisz najlepsze momenty w dzienniku pokładowym, aby o żadne wspomnienie Ci nie umknęło.">

                    </textarea>
                </form>
            </div>
        )
    }
}