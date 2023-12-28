import React from "react";
import { ReactDOM } from "react";
import ReactDOMClient from "react-dom/client";
import { Index1 } from "../ActivityPage/screens/Index/Index1.jsx";

const app1 = document.getElementById("app1");
const root = ReactDOMClient.createRoot(app1);
root.render(<Index1 />);