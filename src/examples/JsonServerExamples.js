import {Container, makeStyles, TextField, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles({
    field: {
        display: "block",
        marginBottom: "10px",
        marginTop: "10px"
    }
})

const JsonServerExamples = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)
    const classes = useStyles()


    useEffect(() => {
        fetch("http://localhost:8000/post")
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        setTitleError(false)
        setDescriptionError(false)
        if (!title) setTitleError(true)
        if (!description) setDescriptionError(true)
        if (title && description) {
            let newPost = {title, "body": description}
            fetch("http://localhost:8000/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            })
                .then(() => setPosts([...posts, newPost]))
        }
    }

    return (
        <Container>
            <React.Fragment>
                <form onSubmit={handleSubmit} noValidate>
                    <Typography
                        variant="h4"
                        color="textSecondary">Add a post
                    </Typography>
                    <TextField
                        className={classes.field}
                        variant="outlined"
                        label="title"
                        size="small"
                        onChange={(e) => setTitle(e.target.value)}
                        error={titleError}
                        required
                    />
                    <TextField
                        className={classes.field}
                        variant="outlined"
                        label="despription"
                        size="small"
                        onChange={(e) => setDescription(e.target.value)}
                        error={descriptionError}
                        required
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit">
                        Add
                    </Button>
                </form>
            </React.Fragment>
            <React.Fragment>
                {posts.map(post => {
                    return (
                        <React.Fragment key={post.id}>
                            <Typography variant="h6" color="primary">{post.title}</Typography>
                            <React.Fragment>
                                <Typography variant="body1" color="textPrimary">{post.body}</Typography>
                            </React.Fragment>
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
        </Container>
    );
}

export default JsonServerExamples