import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index3 } from "./screens/Index/Index3.jsx";

const app3 = document.getElementById("app3");
const root = ReactDOMClient.createRoot(app3);
root.render(<Index3 />);