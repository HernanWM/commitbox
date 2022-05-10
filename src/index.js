import React from "react";
import ReactDOM from "react-dom";

import CommentBox from "./CommentBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CommentBox />
  </React.StrictMode>,
  rootElement
);
