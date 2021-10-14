import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Moment from 'moment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


export default function PeopleDetail() {
    let { id } = useParams();
    // const [loading, setLoading] = useState(true)
    const [peopleDetail, setPeopleDetail] = useState(undefined)

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch(`https://swapi.dev/api/people/${id}?format=json`);
            let data = await res.json();
            setPeopleDetail(data);
            console.log("peopleDetail ", peopleDetail)
            // setLoading(false);
        }

        fetchPeople();
    }, []);

    return (

        <div>

        {peopleDetail ? (
            <container>
            <h1>People Detail Page: {peopleDetail.name}</h1>
            <div class="row mt-5">
                <div class="col">
                    <h4>Height: {peopleDetail.height}</h4>
                </div>
                <div class="col">
                    <h4>Mass: {peopleDetail.mass}</h4>
                </div>
                <div class="col">
                    <h4>Hair Color: {peopleDetail.hair_color}</h4>
                </div>
                <div class="col">
                    <h4>Skin Color: {peopleDetail.skin_color}</h4>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h4>Eye Color: {peopleDetail.eye_color}</h4>
                </div>
                <div className="col">
                    <h4>Birth Year: {peopleDetail.birth_year}</h4>
                </div>
                <div className="col">
                    <h4>Gender: {peopleDetail.gender}</h4>
                </div>
                <div className="col">
                    <h4>Created Time: {peopleDetail.created.substring(0,10)}</h4>
                </div>
                {/* <div className="col">
                    <h4>Created Time: {Moment(peopleDetail.created, Moment.defaultFormat).toDate()} </h4>                    
                </div> */}
            </div>

            
            <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Value</th>
                </tr>
            </thead>
                {peopleDetail.films.map((film,i) =>
                <tr>
                    <td> 
                        {i+1}
                    </td>
                    <td>
                        {film}
                    </td>
                </tr>
                )}
            </Table>

            </container>
        ):(
            <p>Data is Loading </p>
        )}
        </div>  
    )
}
