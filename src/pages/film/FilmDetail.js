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
                        <h1>Film Detail Page: {filmDetail.title}</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <h4>Director: {filmDetail.director}</h4>
                            </div>
                            <div className="col">
                                <h4>Producer: {filmDetail.producer}</h4>
                            </div>
                            <div className="col">
                                <h4>Created Time: {filmDetail.created.substring(0, 10)}</h4>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <h4>Opening Crawl: {filmDetail.opening_crawl}</h4>
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
