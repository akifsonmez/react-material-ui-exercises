import { Container } from "@material-ui/core";
import React from "react"
import AirplanemodeActiveSharpIcon from '@material-ui/icons/AirplanemodeActiveSharp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const IconExamples = () => {
    return (
        <Container>
            <AirplanemodeActiveSharpIcon/>
            <AirplanemodeActiveSharpIcon
                color="primary"
                fontSize = "large"/>
            <AirplanemodeActiveSharpIcon
                color="secondary"
                fontSize = "large"/>
            <AirplanemodeActiveSharpIcon
                color="error"
                fontSize = "large"/>
            <AirplanemodeActiveSharpIcon
                color="disabled"
                fontSize = "large"/>
            <AirplanemodeActiveSharpIcon
                color="action"
                fontSize = "large"/>
                <br/>
            <ThumbUpIcon/>
            
        </Container>
    );
}

export default IconExamples;