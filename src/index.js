import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Document } from "flexsearch";
import tools from "./data/tools.json";

import DeveloperToolchest from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const index = new Document({
  document: {
    id: "id",
    tag: "tag",
    index: [{ field: "title", tokenize: "forward" }],
  },
});

tools.forEach(({ id, title, tag }) => {
  index.add({
    id,
    tag,
    title,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DeveloperToolchest index={index} tools={tools} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
