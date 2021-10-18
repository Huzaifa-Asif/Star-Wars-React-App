import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function Film({data}) {

    return (
        <>
            <h1>Film</h1>
            <Grid columns={3}>
                {data.map((film, i)=>{
                    return (
                        <Grid.Column key={i}>
                            <Link to={`/film-detail/${i+1}`}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{film.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Title</strong>
                                        <p>{film.title}</p>
                                        <strong>Director</strong>
                                        <p>{film.director}</p>
                                        <strong>Producer</strong>
                                        <p>{film.producer}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            </Link>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
