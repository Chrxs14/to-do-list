import React from "react";
import "./App.css";
import { TodoProvider } from "../App/Components/TodoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppUi } from "./AppUi";
import { Index } from "./Pages/index";

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="/home" element={<AppUi />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export { App };
