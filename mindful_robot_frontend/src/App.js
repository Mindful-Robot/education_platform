import { Route, Switch } from 'react-router-dom';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Homepage';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <Homepage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
