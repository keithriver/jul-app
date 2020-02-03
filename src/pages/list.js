import React from "react";

export const List = ({ f }) => {
  return (
    <div className="list">
      {f.map(item => (
        <div className="list-item">
          <div className="bullet" />
          <div className="list-item-header">{item.id}</div>
          <div>
            protein :{" "}
            <span className="number">
              {item["nutrition-per-100g"]
                ? item["nutrition-per-100g"].protein
                : item["nutrition-per-100ml"].protein}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
