import React, { useRef, useState } from "react";
import "./TableItem.scss";

export default function TableItem(props) {
  // hooks
  const popup = useRef(null);
  const [tableData, setTableDate] = useState([]);
  // инпуты таблицы
  const inputNumber = useRef(null);
  const inputComment = useRef(null);

  // дата
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, ".");

  // добавить данные в таблицу
  function addRow(e) {
    setTableDate([
      ...tableData,
      {
        number: inputNumber.current.value,
        comment: inputComment.current.value,
        id: tableData.length,
      },
    ]);
  }

  function showPopup() {
    popup.current.classList.add("active");
  }

  function closePopup(e) {
    popup.current.classList.remove("active");
  }

  return (
    <div className="TableItem">
      <div className="data-wrapp" onClick={showPopup}>
        {props.date}
        <hr />
        value: <hr />
        {props.value}
      </div>
      <div className="TableItem__popup popup" onClick={closePopup} ref={popup}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <table>
            <tbody>
              <tr>
                <th colSpan="1">value</th>
                <th colSpan="1">date</th>
                <th colSpan="1">user</th>
                <th colSpan="1">comment</th>
              </tr>
              <tr>
                <td>4</td>
                <td>20.02.2022</td>
                <td>Petro</td>
                <td>any</td>
              </tr>
              <tr>
                <td>5</td>
                <td>20.02.2022</td>
                <td>Roman</td>
                <td>any</td>
              </tr>
              <tr>
                <td>6</td>
                <td>20.02.2022</td>
                <td>Anna</td>
                <td>any</td>
              </tr>
              {tableData.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.number}</td>
                    <td>{utc}</td>
                    <td>Anna</td>
                    <td>{e.comment}</td>
                  </tr>
                );
              })}
              <tr className="lrow">
                <td>
                  <input
                    type="number"
                    ref={inputNumber}
                    onInput={function (e) {
                      // ограничиваем ввод цифрами
                      e.target.value = e.target.value.replace(/[^\d.]/g, "");
                    }}
                  />
                </td>
                <td>{utc}</td>
                <td>user by default</td>
                <td>
                  <input type="text" ref={inputComment} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="popup__closebtn" onClick={closePopup}>
            x
          </div>
          <button className="popup__addBtn" onClick={addRow}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
