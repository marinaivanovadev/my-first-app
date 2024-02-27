import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./App";
import "./index.css";
    


// Use createRoot to render your element
const root = createRoot(document.getElementById("root"));
root.render(<NavBar />);


