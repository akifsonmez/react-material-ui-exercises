import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TypographyExamples from './examples/TypographyExamples';
import ButtonExamples from './examples/ButtonExamples';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/TypographyExamples">
          <TypographyExamples />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/ButtonExamples">
          <ButtonExamples />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
