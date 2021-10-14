import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function People({data}) {
    let history = useHistory();

    return (
        <>
            <h1>People</h1>
            <Grid columns={3}>
                {data.map((people, i)=>{
                    return (
                        <Grid.Column key={i}>
                            <Link to={`/people-detail/${i+1}`}>
                            {/* onClick={() => {history.pushState('/people-detail')}} */}
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p>{people.hair_color}</p>
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
