/**
 * @description: This is for learning purpose
 * @author: Aufa Billah
 */
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// get root element
const container = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(container);

// render app to root
root.render(<App />);

