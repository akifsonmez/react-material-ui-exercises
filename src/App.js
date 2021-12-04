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
                    <Route path="/TypographyExamples">
                        <TypographyExamples/>
                    </Route>
                    <Route path="/ButtonExamples">
                        <ButtonExamples/>
                    </Route>
                    <Route path="/IconExamples">
                        <IconExamples/>
                    </Route>
                    <Route path="/TextFieldExamples">
                        <TextFieldExamples/>
                    </Route>
                    <Route path="/RadioButtonExamples">
                        <RadioButtonExamples/>
                    </Route>
                    <Route path="/JsonServerExamples">
                        <JsonServerExamples/>
                    </Route>
                    <Route path="/GridExamples">
                        <GridExamples/>
                    </Route>
                    <Route path="/CardComponentExamples">
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
