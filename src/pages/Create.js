import { Container, Typography, Button } from '@material-ui/core';
import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Create = () => {
    return (
        <Container>
            <Typography
                variant='h6'
                color='textSecondary'
                gutterBottom>
            Create A New Node
            </Typography>
            <Button
                color='secondary'
                variant='contained'
                endIcon={<ArrowRightIcon/>}>
                Submit
            </Button>
        </Container>
    );
}

export default Create;