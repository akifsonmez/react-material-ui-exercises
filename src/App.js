import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TypographyExamples from './examples/TypographyExamples';
import ButtonExamples from './examples/ButtonExamples';
import IconExamples from './examples/IconExamples';
import TextFieldExamples from './examples/TextFieldExamples';
import RadioButtonExamples from "./examples/RadioButtonExamples";
import JsonServerExamples from "./examples/JsonServerExamples";
import GridExamples from "./examples/GridExamples";
import CardComponentExamples from "./examples/CardComponentExamples";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/react-material-ui-exercises/TypographyExamples">
                        <TypographyExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/ButtonExamples">
                        <ButtonExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/IconExamples">
                        <IconExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/TextFieldExamples">
                        <TextFieldExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/RadioButtonExamples">
                        <RadioButtonExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/JsonServerExamples">
                        <JsonServerExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/GridExamples">
                        <GridExamples/>
                    </Route>
                    <Route path="/react-material-ui-exercises/CardComponentExamples">
                        <CardComponentExamples/>
                    </Route>
                    <Route exact path="/">
                        <TypographyExamples/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
