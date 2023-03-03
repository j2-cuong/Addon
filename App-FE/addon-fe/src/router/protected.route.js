import {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import FullLayout from "../layout/FullLayout";
import TopProgressBar from "../view/components/components-page/loading.component";

// @ts-ignore
const ProtectedRoutes = () => (
    <FullLayout>
        <Switch>
            <Suspense
                fallback={<TopProgressBar/>}
            >
                {Routes.map(({component: Component, path, exact}) => (
                    <Route
                        path={`/${path}`}
                        key={path}
                        exact={exact}
                    >
                        <Component/>
                    </Route>
                ))}
            </Suspense>
        </Switch>
    </FullLayout>
);

export default ProtectedRoutes;