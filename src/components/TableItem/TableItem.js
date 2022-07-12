import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDate } from "../../store/mainReducer";

export default function TableItem(props) {
  // redux
  const data = useSelector((state) => state.main.data);
  const dispatch = useDispatch();

  // данные именно этой ячейки
  const thisDataItem =
    data[props.date.citi].G[props.date.year][props.date.quarter];

  // hooks
  // инпуты таблицы
  const inputNumber = useRef(null);
  const inputComment = useRef(null);

  // дата
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, ".");

  // добавить данные в таблицу
  function addRow() {
    dispatch(
      setDate({
        // ключи чтобы найти конкетный обект
        route: {
          citi: props.date.citi,
          year: props.date.year,
          quarter: props.date.quarter,
        },
        // новые данные
        newData: {
          number: inputNumber.current.value,
          time: utc,
          user: "Anna",
          comment: inputComment.current.value,
          id:
            thisDataItem.popupTeble === undefined
              ? 0
              : thisDataItem.popupTeble.length,
        },
      })
    );
  }

  //стелизируем всплывающее окно
  const css = {
    TableItem: {
      position: "relative",
      width: "600px",
    },
    table: {
      background: "black",
    },
    tbody: {
      background: "white",
    },
    popup__closebtn: {
      position: "absolute",
      top: "-10px",
      right: "100px",
      fontSize: "30px",
      fontWeight: "900",
      color: "black",
    },
    popup__addBtn: {
      position: "absolute",
      right: "75px",
      height: "25px",
      width: "40px",
      bottom: "0px",
    },
  };

  return (
    <div style={css.TableItem}>
      <table style={css.table}>
        <tbody style={css.tbody}>
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
          {/* выводи строку с новыми данными */}
          {thisDataItem.popupTeble != undefined
            ? thisDataItem.popupTeble.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.number}</td>
                    <td>{utc}</td>
                    <td>Anna</td>
                    <td>{e.comment}</td>
                  </tr>
                );
              })
            : null}
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
      <div
        style={css.popup__closebtn}
        onClick={() => {
          props.date.close(false);
        }}
      >
        x
      </div>
      <button
        className="popup__addBtn"
        onClick={addRow}
        style={css.popup__addBtn}
      >
        Add
      </button>
    </div>
  );
}
