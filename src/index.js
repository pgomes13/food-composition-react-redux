import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import configureStore from './store';
import { indexRoutes } from './routes/index';
import registerServiceWorker from './registerServiceWorker';

const hist = createBrowserHistory();

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router history={hist}>
			<Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
			</Switch>
		</Router>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
