import React from "react";
import { useSelector } from "react-redux";

import "./TableYear.scss";

export default function TableYear(props) {
  const data = useSelector((state) => state.main.data);

  // открываем в новом окне
  function windowOpen(e) {
    window.open(`practice__table/${e.target.dataset.url}`);
  }

  return (
    <>
      {props.data.map((e) => {
        return (
          <td key={e} className="TableYear">
            {/* генерируем линк: город + год + квартал */}
            <div onClick={windowOpen} data-url={props.citi + props.year + e[0]}>
              value: {e[1].value}
              <hr />
              {/* выводим value из поля comment */}
              {data[props.citi].G[props.year][e[0]].popupTeble != undefined
                ? data[props.citi].G[props.year][e[0]].popupTeble.map((e) => {
                    return (
                      <span key={e.id}>
                        <hr /> {e.comment}
                      </span>
                    );
                  })
                : null}
            </div>
          </td>
        );
      })}
    </>
  );
}
