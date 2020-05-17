import React from 'react';
import { RouteProps, Route } from 'react-router';

export interface ILayoutRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  layout: React.ComponentType<any>;
}

export const LayoutRoute = ({ component: Component, layout: Layout, ...rest }: ILayoutRouteProps) => {
  const handleRender = (props: any) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
  return <Route {...rest} render={handleRender} />;
};
