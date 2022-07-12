import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import TableItem from "../TableItem/TableItem";

// обертка для всплывающего окна
const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

export default function WindowOpen(props) {
  // Hooks
  // true = window.open, false = window.close
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ячейка в основной таблице */}
      <td key={props.quarter}>
        <div onClick={() => setOpen(true)}>
          value: {props.value}
          <hr />
          {/* выводим value из поля comment */}
          {props.data[props.citi].G[props.year][props.quarter].popupTeble !=
          undefined
            ? props.data[props.citi].G[props.year][
                props.quarter
              ].popupTeble.map((e) => {
                return (
                  <span key={e.id}>
                    <hr /> {e.comment}
                  </span>
                );
              })
            : null}
        </div>
      </td>

      {/* новое окно браузера */}
      {open && (
        <RenderInWindow>
          <TableItem
            date={{
              citi: props.citi,
              year: props.year,
              quarter: props.quarter,
              close: setOpen,
            }}
          />
        </RenderInWindow>
      )}
    </>
  );
}
