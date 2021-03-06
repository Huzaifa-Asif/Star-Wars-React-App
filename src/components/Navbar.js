import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to='/'>
                Star Wars
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" exact activeclassname="active" to='/' >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to='/people'>
                            People
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to='/planet'>
                            Planets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to='/film'>
                            Films
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
