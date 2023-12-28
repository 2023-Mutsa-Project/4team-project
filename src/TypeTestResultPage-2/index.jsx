import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index5 } from "./screens/Index/Index5.jsx";

const app5 = document.getElementById("app5");
const root = ReactDOMClient.createRoot(app5);
root.render(<Index5 />);