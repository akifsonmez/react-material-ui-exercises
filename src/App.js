import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TypographyExamples from './examples/TypographyExamples';
import ButtonExamples from './examples/ButtonExamples';
import IconExamples from './examples/IconExamples';
import TextFieldExamples from './examples/TextFieldExamples';
import RadioButtonExamples from "./examples/RadioButtonExamples";
import JsonServerExamples from "./examples/JsonServerExamples";
import GridExamples from "./examples/GridExamples";
import CardComponentExamples from "./examples/CardComponentExamples";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/TypographyExamples">
                    <TypographyExamples/>
                </Route>
                <Route exact path="/ButtonExamples">
                    <ButtonExamples/>
                </Route>
                <Route exact path="/IconExamples">
                    <IconExamples/>
                </Route>
                <Route exact path="/TextFieldExamples">
                    <TextFieldExamples/>
                </Route>
                <Route exact path="/RadioButtonExamples">
                    <RadioButtonExamples/>
                </Route>
                <Route exact path="/JsonServerExamples">
                    <JsonServerExamples/>
                </Route>
                <Route exact path="/GridExamples">
                    <GridExamples/>
                </Route>
                <Route exact path="/CardComponentExamples">
                    <CardComponentExamples/>
                </Route>
                <Route exact path="/">
                    <TypographyExamples/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
