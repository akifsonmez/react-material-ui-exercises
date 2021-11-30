import { ButtonGroup, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    btngroup: {
        marginTop: '100px',
    },
    btn: {
        backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'yellow',
            color: 'black'
        }
    },
    container:{
        marginTop:'20px'
    }
});

const ButtonExamples = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Container>
                <Button>
                    Default Button
                </Button>
                <Button
                    variant="contained">
                    Contained Button
                </Button>
                <Button
                    variant="contained"
                    color="primary">
                    Contained Primary Button
                </Button>
                <Button
                    variant="text"
                    color="primary">
                    Text Primary Button
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => alert("Outlined Primary Button")}>
                    Small Outlined Primary Button
                </Button>
            </Container>
            <Container>
                <ButtonGroup
                    className={classes.btngroup}
                    color="secondary"
                    variant="contained">
                    <Button className={classes.btn}>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button className={classes.btn}>Button 3</Button>
                </ButtonGroup>
            </Container>
        </Container>
    );
}

export default ButtonExamples