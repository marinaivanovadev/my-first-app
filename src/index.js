import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.css"
    


// Use createRoot to render your element
const root = createRoot(document.getElementById("root"));
root.render(<App />);


