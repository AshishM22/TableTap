import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
