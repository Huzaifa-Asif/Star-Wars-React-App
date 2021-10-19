import React from 'react';
import Slider from '../../components/Slider';
import homeImage from '../../images/swapi.jpg';

export default function Home() {
    return (
        <div>
            <Slider />
            <div className="container">
                <div className="row py-5">

                    <div className="col-lg-6 col-sm-12 my-auto">
                        <h2>Welcome to the Star Wars APP - SWAPI </h2>
                        <p> The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!
                            We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
                        <p> All the data is accessible through our HTTP web API. Consult our <a href="https://swapi.dev/documentation" target="_blank" rel="noreferrer">documentation</a> if you'd like to get started.
                            Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.
                        </p>
                        <p>Swapi Documentation: <a href="https://swapi.dev/documentation" target="_blank" rel="noreferrer">https://swapi.dev/documentation</a> </p>
                    </div>

                    <div className="col-lg-6 col-sm-12 mt-4">
                        <img src={homeImage} className="w-100"></img>
                    </div>

                </div>
            </div>

        </div>
    )
}
