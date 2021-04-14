import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to='/' exact component='' />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
