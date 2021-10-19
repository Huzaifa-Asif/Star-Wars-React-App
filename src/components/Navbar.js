import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link class="navbar-brand" to='/'>
                Star Wars
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" exact activeClassName="active" to='/' >
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" activeClassName="active" to='/people'>
                            People
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" activeClassName="active" to='/planet'>
                            Planets
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" activeClassName="active" to='/film'>
                            Films
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
