import React from "react";
import { useSelector } from "react-redux";

import WindowOpen from "../WindowOpen/WindowOpen";

export default function TableYearWrapp(props) {
  // Redux
  const data = useSelector((state) => state.main.data);

  return (
    <>
      {props.data.map((e) => {
        return (
          <WindowOpen
            key={e}
            citi={props.citi}
            year={props.year}
            quarter={e[0]}
            value={e[1].value}
            data={data}
          />
        );
      })}
    </>
  );
}
