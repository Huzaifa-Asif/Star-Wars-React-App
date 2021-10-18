import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader } from 'semantic-ui-react';

export default function PeopleDetail() {
    let { id } = useParams();
    const [peopleDetail, setPeopleDetail] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch(`https://swapi.dev/api/people/${id}?format=json`);
            let data = await res.json();
            setPeopleDetail(data);
            setLoading(false);
        }

        fetchPeople();
    }, []);

    return (

        <div>
            <Container>
                {loading ? (
                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                ) : (
                    <container>
                        <h1>People Detail Page: {peopleDetail.name}</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <h4>Height: {peopleDetail.height}</h4>
                            </div>
                            <div className="col">
                                <h4>Mass: {peopleDetail.mass}</h4>
                            </div>
                            <div className="col">
                                <h4>Hair Color: {peopleDetail.hair_color}</h4>
                            </div>
                            <div className="col">
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
                                <h4>Created Time: {peopleDetail.created.substring(0, 10)}</h4>
                            </div>
                        </div>


                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Serial Number</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            {peopleDetail.films.map((film, i) =>
                                <tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <a href={film} target="_blank" rel="noreferrer">{film}</a>
                                    </td>
                                </tr>
                            )}
                        </Table>

                    </container>
                )}
            </Container>
        </div>
    )
}
