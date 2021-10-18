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
                        <h1>Planet Detail Page: {planetDetail.name}</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <h4>Climate: {planetDetail.climate}</h4>
                            </div>
                            <div className="col">
                                <h4>Diameter: {planetDetail.diameter}</h4>
                            </div>
                            <div className="col">
                                <h4>Gravity: {planetDetail.gravity}</h4>
                            </div>
                            <div className="col">
                                <h4>Obital Period: {planetDetail.orbital_period}</h4>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <h4>Population: {planetDetail.population}</h4>
                            </div>
                            <div className="col">
                                <h4>Rotation Period: {planetDetail.rotation_period}</h4>
                            </div>
                            <div className="col">
                                <h4>Surface Water: {planetDetail.surface_water}</h4>
                            </div>
                            <div className="col">
                                <h4>Created Time: {planetDetail.created.substring(0, 10)}</h4>
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
