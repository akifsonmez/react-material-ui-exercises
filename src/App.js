import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TypographyExamples from './pages/TypographyExamples';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/TypographyExamples">
          <TypographyExamples />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
