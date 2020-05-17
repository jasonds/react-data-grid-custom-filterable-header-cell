import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { LayoutRoute } from './components/routing/LayoutRoute';
import Layout from './layouts/Layout';
import Tasks from './pages/tasks';

const App: React.FC = () => {
  const renderRoutes = () => {
    return (
      <Switch>
        {/* General */}
        <LayoutRoute exact path="/" layout={Layout} component={Tasks} />
      </Switch>
    );
  };

  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>{renderRoutes()}</Router>
    </Provider>
  );
};

export default App;
