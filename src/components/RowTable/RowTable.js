import React from "react";
import TableItem from "../TableItem/TableItem";
import "./RowTable.scss";

export default function RowTable(props) {
  const keys = Object.keys(props.data.G); //получаем ключи объекта в виде массива

  return (
    <tr className="RowTable">
      {/* 2017 */}
      <th>{props.citi}</th>
      <td>
        {keys[0] == 2017 ? (
          <TableItem
            date={props.data.G[keys[0]].XX.dateRelease}
            value={props.data.G[keys[0]].XX.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {keys[0] == 2017 ? (
          <TableItem
            date={props.data.G[keys[0]].YY.dateRelease}
            value={props.data.G[keys[0]].YY.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {keys[0] == 2017 ? (
          <TableItem
            date={props.data.G[keys[0]].ZZ.dateRelease}
            value={props.data.G[keys[0]].ZZ.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      {/* 2018 */}
      <td>
        {keys[1] == 2018 ? (
          <TableItem
            date={props.data.G[keys[1]].XX.dateRelease}
            value={props.data.G[keys[1]].XX.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {keys[1] == 2018 ? (
          <TableItem
            date={props.data.G[keys[1]].YY.dateRelease}
            value={props.data.G[keys[1]].YY.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {keys[1] == 2018 ? (
          <TableItem
            date={props.data.G[keys[1]].ZZ.dateRelease}
            value={props.data.G[keys[1]].ZZ.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      {/* 2019 */}
      <td>
        {keys[2] == 2019 ? (
          <TableItem
            date={props.data.G[keys[2]].XX.dateRelease}
            value={props.data.G[keys[2]].XX.value}
          />
        ) : keys[1] == 2019 ? (
          <TableItem
            date={props.data.G[keys[1]].XX.dateRelease}
            value={props.data.G[keys[1]].XX.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {keys[2] == 2019 ? (
          <TableItem
            date={props.data.G[keys[2]].YY.dateRelease}
            value={props.data.G[keys[2]].YY.value}
          />
        ) : keys[1] == 2019 ? (
          <TableItem
            date={props.data.G[keys[1]].YY.dateRelease}
            value={props.data.G[keys[1]].YY.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
      <td>
        {keys[2] == 2019 ? (
          <TableItem
            date={props.data.G[keys[2]].ZZ.dateRelease}
            value={props.data.G[keys[2]].ZZ.value}
          />
        ) : keys[1] == 2019 ? (
          <TableItem
            date={props.data.G[keys[1]].ZZ.dateRelease}
            value={props.data.G[keys[1]].ZZ.value}
          />
        ) : (
          <p>-</p>
        )}
      </td>
    </tr>
  );
}
