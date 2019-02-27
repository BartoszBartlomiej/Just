import React, {Component} from 'react';


export default class AboutAuthor extends Component {
    render() {
        return (
            <section className="aboutAuthor">
                <div id='about__author'/>
                <div className='content'>
                    <h3>O AUTORZE</h3>
                    <div className='aboutAuthor__container'>
                        <div className='aboutAuthor__description'>
                            <h3>Bartosz Bartłomiej Lewicki</h3>
                            <p>Od dziecka fascynują mnie podróże. Zaczęło się od wycieczek rowerowych, pieszych z
                                plecakiem prowiantu po okolicach Nysy - mojego rodzinnego miasta. Z biegiem lat zaczęły
                                się podróże po Polsce pociągiem, autobusem, albo z wystawionym kciukiem do góry, liczac
                                na dobroduszność kierowców. Następnie kilka krajów Europy, Islandia, Tajlandia, a w
                                planach Wietnam. Ta pasja popchnęła mnie do stworzenia JustTrip, miejsca w którym każdy
                                będzie mógł zaplanować swoją podróż, stworzyć z niej pamiątkę oraz dzielić się swoimi
                                przeżyciami i doświadczeniami z innymi entuziastami podróży, nie ważne czy dalekich czy
                                bliskich. Każda podróż kształci! </p>
                        </div>
                        <div className='aboutAuthor__img'>
                            <img alt='author' title='bbl'
                                 src='https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/403527_2943282681178_1640705100_n.jpg?_nc_cat=101&_nc_ht=scontent.fktw1-1.fna&oh=f69c8934bf007896640b83bc5dec1966&oe=5CE803AF'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}