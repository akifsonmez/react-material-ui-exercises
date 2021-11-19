import { ButtonGroup, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

const ButtonExamples = () => {
    return (
        <Container>
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
                    onClick={()=>alert("Outlined Primary Button")}>
                    Small Outlined Primary Button
                </Button>
            </Container>
            <Container>
                <ButtonGroup
                    color="secondary"
                    variant="contained">
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 3</Button>
                </ButtonGroup>
            </Container>
        </Container>
    );
}

export default ButtonExamples