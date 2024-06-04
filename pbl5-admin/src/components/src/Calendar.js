import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextWrapper from "./context/ContextWrapper";
function Calendar() {
  return (

    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
}
export default Calendar;