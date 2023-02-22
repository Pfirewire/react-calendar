import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { NavigationProvider } from "./components/context/navigation";
import { store } from "./store";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Provider>
);