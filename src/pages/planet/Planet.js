import React from 'react'
import { Link } from "react-router-dom";

export default function Planet({ data }) {
    return (
        <>
            <header class="masthead planet-background mb-5">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 text-center">
                            <h1 class="fw-light image-title">Start Wars Planet List</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div class="container">
                <div class="row">
                    {data.map((planet, i) => {
                        return (
                            <div class="col-lg-4 col-md-4 col-sm-12 my-2">
                                <div class="card" key={i}>
                                    <Link to={`/planet-detail/${i + 1}`}>
                                        <div class="card-body text-dark">
                                            <h4 class="card-title">{planet.name}</h4>
                                            <p class="card-text">

                                                <strong>Climate</strong>
                                                <p>{planet.climate}</p>
                                                <strong>Population</strong>
                                                <p>{planet.population}</p>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
