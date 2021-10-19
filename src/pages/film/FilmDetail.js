import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader } from 'semantic-ui-react';

export default function FilmDetail() {
    let { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [filmDetail, setFilmDetail] = useState(undefined)

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch(`https://swapi.dev/api/films/${id}?format=json`);
            let data = await res.json();
            setFilmDetail(data);
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
                        <h1 className="mt-5">Film Detail Page: {filmDetail.title}</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <p><b>Director:</b> {filmDetail.director}</p>
                            </div>
                            <div className="col">
                                <p><b>Producer:</b> {filmDetail.producer}</p>
                            </div>
                            <div className="col">
                                <p><b>Created Time:</b> {filmDetail.created.substring(0, 10)}</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <p><b>Opening Crawl:</b> {filmDetail.opening_crawl}</p>
                            </div>
                        </div>


                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Serial Number</th>
                                    <th>characters Url</th>
                                </tr>
                            </thead>
                            {filmDetail.characters.map((character, i) =>
                                <tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <a href={character} target="_blank" rel="noreferrer">{character}</a>
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
