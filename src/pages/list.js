import React from "react";
import { Link } from "react-router-dom";
const grammsKey = "nutrition-per-100g";
const mlKey = "nutrition-per-100ml";
export const List = ({ food }) => {
  return (
    <div className="list">
      {food.map(item => (
        // ` = string literal, позволяет вставлять в строку переменные;
        //  ${} - вставляет переменную
        //
        <Link to={`/${item.id}`} className="list-item" key={item.id}>
          <div className="bullet" />
          <div className="list-item-header">{item.id}</div>
          <div>
            protein :{" "}
            <span className="number">
              {item[grammsKey]
                ? // в JS не могут содержаться "-" в переменных, поэтому, чтобы обратиться к ключу объекта с тире, используется данный синтаксис (динамическое обращение по ключу)
                  item[grammsKey].protein
                : item[mlKey].protein}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
