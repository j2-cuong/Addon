import React, { FC, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { getPath } from '@/router-paths';
import { AppRoute } from '@routes/types';
import ProtectedRoute from '@routes/ProtectedRoute';
import MainLayout from '@layouts/MainLayout';

const routes: AppRoute[] = [{
  path: [getPath('dashboard'), getPath('home')],
  component: lazy(() => import('@pages/DashboardPage')),
}];

const MainRoutes: FC = () => {
  return (
    <MainLayout>
      <Switch>
        {
          routes.map((route, index) => (
            <ProtectedRoute
              exact
              key={index}
              component={route.component}
              path={route.path}
              permissionKeys={route.permissionKeys}
            />
          ))
        }
      </Switch>
    </MainLayout>
  );
};

export default MainRoutes;