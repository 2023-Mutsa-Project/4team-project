import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App.jsx";
//import { BrowserRouter as Router } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

//참고 코드
// // const container = document.getElementById('app');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)

// // ReactDOM.render(<App />, document.getElementById('app'));



//chatGPT-해결 OK
const root = createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </PersistGate>
  </Provider>
);



// 제일 처음 코드
// import React from "react";
// import ReactDOMClient from "react-dom/client";
// import { Index0 } from "./screens/Index/Index0.jsx";

// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<Index0 />);
