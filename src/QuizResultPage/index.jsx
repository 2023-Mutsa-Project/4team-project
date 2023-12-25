import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index10 } from "./screens/Index/Index10.jsx";

const app10 = document.getElementById("app10");
const root = ReactDOMClient.createRoot(app10);
root.render(<Index10 />);