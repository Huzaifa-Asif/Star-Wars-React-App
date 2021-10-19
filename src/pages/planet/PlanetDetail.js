import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader } from 'semantic-ui-react';

export default function PlanetDetail() {
    let { id } = useParams();
    const [planetDetail, setPlanetDetail] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch(`https://swapi.dev/api/planets/${id}?format=json`);
            let data = await res.json();
            setPlanetDetail(data);
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
                        <h1 className="mt-5">Planet Detail Page: {planetDetail.name}</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <p><b>Climate:</b> {planetDetail.climate}</p>
                            </div>
                            <div className="col">
                                <p><b>Diameter:</b> {planetDetail.diameter}</p>
                            </div>
                            <div className="col">
                                <p><b>Gravity:</b> {planetDetail.gravity}</p>
                            </div>
                            <div className="col">
                                <p><b>Obital Period:</b> {planetDetail.orbital_period}</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <p><b> Population:</b> {planetDetail.population}</p>
                            </div>
                            <div className="col">
                                <p><b> Rotation Period:</b> {planetDetail.rotation_period}</p>
                            </div>
                            <div className="col">
                                <p><b> Surface Water:</b> {planetDetail.surface_water}</p>
                            </div>
                            <div className="col">
                                <p><b> Created Time:</b> {planetDetail.created.substring(0, 10)}</p>
                            </div>
                        </div>


                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Serial Number</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            {planetDetail.residents.map((resident, i) =>
                                <tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <a href={resident} target="_blank" rel="noreferrer">{resident}</a>
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
