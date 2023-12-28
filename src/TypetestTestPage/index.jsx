import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index8 } from "./screens/Index/Index8.jsx";

const app8 = document.getElementById("app8");
const root = ReactDOMClient.createRoot(app8);
root.render(<Index8 />);