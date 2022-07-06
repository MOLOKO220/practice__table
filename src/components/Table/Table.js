import React from "react";
import "./Table.scss";
import { useSelector } from "react-redux";

import TableItem from "../TableYear/TableYear";

export default function Table() {
  // redux
  const data = Object.entries(useSelector((state) => state.main.data));

  return (
    <div className="Table">
      <table>
        <tbody>
          <tr>
            <td rowSpan="2" className="regions">
              regions
            </td>
            {/* выводим года, не лучший способ(( ибо привязаны к первому объекту */}
            {Object.keys(data[0][1].G).map((e) => (
              <td colSpan="3" key={e}>
                {e}
              </td>
            ))}
          </tr>
          <tr>
            {Object.keys(data[0][1].G).map((e) => {
              return (
                <td key={e} colSpan="3" className="quarter">
                  <span>xx</span>
                  <span>yy</span>
                  <span>zz</span>
                </td>
              );
            })}
          </tr>
          {data.map((e) => {
            return (
              <tr key={e}>
                <td>{e[0]}</td>

                {Object.keys(data[0][1].G).map((y) => {
                  if (e[1].G[y] != undefined) {
                    return (
                      <TableItem
                        key={y}
                        citi={e[0]}
                        year={y}
                        data={Object.entries(e[1].G[y])}
                      ></TableItem>
                    );
                  } else {
                    return (
                      <td colSpan="3" key={y}>
                        -
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
