import {useEffect, useState} from "react";
import {Card, CardContent, CardHeader, Container, Grid, IconButton, Typography} from "@material-ui/core";
import {DeleteOutlineOutlined} from "@material-ui/icons";

const CardComponentExamples = () => {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=10")
            .then(response => response.json())
            .then((data) => setJokes(data.jokes))
    }, [])

    function handleIconClick(clickedJoke) {
        console.log(jokes);
        let newJokes = jokes.filter(joke => joke.id !== clickedJoke.id)
        console.log(newJokes);
        setJokes(newJokes)
    }

    return (<Container>
            <Grid container spacing={3}>
                {jokes.map((joke) => {
                    return (<Grid item xs={12} sm={6} md={3} key={joke.id}>
                        <Card elevation={5}>
                            <CardHeader
                                title={`${joke.category} Joke`}
                                color="secondary"
                                action={<IconButton onClick={() => handleIconClick(joke)}>
                                    <DeleteOutlineOutlined/>
                                </IconButton>}/>
                            <CardContent>
                                <Typography color="textSecondary" variant="body2">
                                    {joke["joke"]}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>);
                })}
            </Grid></Container>);
}

export default CardComponentExamples