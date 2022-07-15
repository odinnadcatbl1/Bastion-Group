import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import App from "./components/App/App";
import { store } from "./store";

import "./index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Header />
            <App />
        </Provider>
    </React.StrictMode>
);
