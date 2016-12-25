import {AppContainer} from "react-hot-loader";
import React from "react";
import {render} from "react-dom";
import Main from "../views/Main";

const rootElement = document.getElementById('root');
render(
    <AppContainer>
        <Main />
    </AppContainer>,
    rootElement);

if (module.hot) {
    module.hot.accept('../views/Main', () =>
        render(
            <AppContainer>
                <Main />
            </AppContainer>,
            rootElement)
    );
}