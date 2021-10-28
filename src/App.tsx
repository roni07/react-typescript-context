import React, {lazy, Suspense} from 'react';
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import {DETAILS_PATH, HOME_PATH} from "./routes";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const HomePage = lazy(() => import("./component/Homepage"));
const Details = lazy(() => import("./component/Details"));

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<p>Loading........</p>}>
                <BrowserRouter>
                    <Switch>
                        <ProductContextProvider>
                            <Route exact path={HOME_PATH} component={HomePage}/>
                            <Route exact path={`${DETAILS_PATH}/:id`} component={Details}/>
                        </ProductContextProvider>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
