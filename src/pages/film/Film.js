import React from 'react';
import { Link } from "react-router-dom";

export default function Film({ data }) {

    return (

        <>
            <header className="masthead film-background mb-5">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="fw-light image-title">Start Wars Film List</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row">
                    {data.map((film, i) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-12 my-2">
                                <div className="card" key={i}>
                                    <Link to={`/film-detail/${i + 1}`}>
                                        <div className="card-body text-dark">
                                            <h4 className="card-title">{film.title}</h4>
                                            <p className="card-text">

                                                <strong>Director</strong>
                                                <p>{film.director}</p>
                                                <strong>Producer</strong>
                                                <p>{film.producer}</p>
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
