import React from "react";
import { useSelector } from "react-redux";

import Table from "./components/Table/Table";

export default function App() {
  // redux
  const data = Object.entries(useSelector((state) => state.main.data));

  return (
    <div className="App ">
      <Table />
    </div>
  );
}
