import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index4 } from "./screens/Index/Index4.jsx";

const app4 = document.getElementById("app4");
const root = ReactDOMClient.createRoot(app4);
root.render(<Index4 />);