import React from "react";
import { ProtectedRouteProps } from "../../../types/ProtectedRouteProps";

const Index: React.FC<ProtectedRouteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Index;
