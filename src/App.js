import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TypographyExamples from './examples/TypographyExamples';
import ButtonExamples from './examples/ButtonExamples';
import IconExamples from './examples/IconExamples';
import Create from './pages/Create';

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
      <Switch>
        <Route exact path="/IconExamples">
          <IconExamples />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
