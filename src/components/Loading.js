import React from "react";
import Navbar from "./Navbar";

export const Loading = ({ flag }) => {
  return (
    <div>
      {flag && <Navbar />}
      <h3 className="text-center mt-4 ">.... Loading</h3>
    </div>
  );
};
