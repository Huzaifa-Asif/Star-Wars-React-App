import React from 'react'
import { Card, Grid } from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
export default function Planet({data}) {
    return (
        <>
        <h1>Planets</h1>
        <Grid columns={3}>
            {data.map((people, i)=>{
                return (
                    <Grid.Column key={i}>
                        <Link to={`/people-detail/${i+1}`}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{people.climate}</p>
                                    <strong>Diameter</strong>
                                    <p>{people.diameter}</p>
                                    <strong>Population</strong>
                                    <p>{people.population}</p>
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
