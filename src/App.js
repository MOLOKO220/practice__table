import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";

import Table from "./components/Table/Table";
import TableItem from "./components/TableItem/TableItem";
import { Route, Routes } from "react-router-dom";

export default function App() {
  // redux
  const data = Object.entries(useSelector((state) => state.main.data));

  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Table />} />

        {/* генерируем линк: "c[0]"- город,   "y[0]" - год, q[0] - квартал */}
        {data.map((c) => {
          return Object.entries(c[1].G).map((y) => {
            return Object.entries(y[1]).map((q) => {
              return (
                <Route
                  key={c[0]}
                  path={c[0] + y[0] + q[0]}
                  element={
                    <TableItem
                      date={{
                        citi: c[0],
                        year: y[0],
                        quarter: q[0],
                      }}
                    />
                  }
                />
              );
            });
          });
        })}
      </Routes>
    </div>
  );
}
