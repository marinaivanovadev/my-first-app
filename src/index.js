import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

const element = <div>Hello World</div>;

// Use createRoot to render your element
const root = createRoot(document.getElementById("root"));
root.render(element);

console.log(element);
