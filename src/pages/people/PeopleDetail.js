import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { fetchPeopleDetails } from '../../services/RestApi';


export default function PeopleDetail() {
    let { id } = useParams();
    const [peopleDetail, setPeopleDetail] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const peopleDetailResult = await fetchPeopleDetails(id);
            setPeopleDetail(peopleDetailResult);
            setLoading(false);
        }
        fetchData();
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
                        <h1 className="mt-5">People Detail Page: {peopleDetail.name}</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <p><b>Height:</b> {peopleDetail.height}</p>
                            </div>
                            <div className="col">
                                <p><b>Mass:</b> {peopleDetail.mass}</p>
                            </div>
                            <div className="col">
                                <p><b>Hair Color:</b> {peopleDetail.hair_color}</p>
                            </div>
                            <div className="col">
                                <p><b>Skin Color:</b> {peopleDetail.skin_color}</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <p><b>Eye Color:</b> {peopleDetail.eye_color}</p>
                            </div>
                            <div className="col">
                                <p><b>Birth Year:</b> {peopleDetail.birth_year}</p>
                            </div>
                            <div className="col">
                                <p><b>Gender:</b> {peopleDetail.gender}</p>
                            </div>
                            <div className="col">
                                <p><b>Created Time:</b> {peopleDetail.created.substring(0, 10)}</p>
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
