import {Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {useState} from "react";


const RadioButtonExamples = () => {
    const [gender, setGender] = useState("female")
    return (<>
        <Container>
            <Radio value="test"/>
            <Radio value="test2"/>
            <Radio value="test3"/>
        </Container>
        <Container>
            <RadioGroup>
                <Radio value="test"/>
                <Radio value="test2"/>
                <Radio value="test3"/>
            </RadioGroup>
        </Container>
        <Container>
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
                    <FormControlLabel control={<Radio/>} label="Male" value="male"/>
                    <FormControlLabel control={<Radio/>} label="Female" value="female"/>
                    <FormControlLabel control={<Radio/>} label="Other" value="other"/>
                </RadioGroup>
            </FormControl>
        </Container>

    </>);
}

export default RadioButtonExamples

