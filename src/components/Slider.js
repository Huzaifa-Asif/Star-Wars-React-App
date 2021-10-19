import React from 'react'
import { Link } from "react-router-dom";

export default function Slider() {


    return (
        <div>

            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active slider-css carousel-1">
                        <div className="carousel-caption">
                            <h1>Star Wars Film List</h1>
                            <Link className="btn btn-lg btn-primary mb-5" to="/film">View Details</Link>
                        </div>
                    </div>
                    <div className="carousel-item slider-css carousel-2">
                        <div className="carousel-caption">
                            <h1>Star Wars People List</h1>
                            <Link className="btn btn-lg btn-primary mb-5" to="/people">View Details</Link>
                        </div>
                    </div>
                    <div className="carousel-item slider-css carousel-3">
                        <div className="carousel-caption">
                            <h1>Star Wars Planet List</h1>
                            <Link className="btn btn-lg btn-primary mb-5" to="/planet">View Details</Link>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>


        </div>
    )
}
