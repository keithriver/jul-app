import React from "react";
const grammsKey = "nutrition-per-100g";
const mlKey = "nutrition-per-100ml";

export const Item = ({ item }) => {
  const nutritionParams = item[grammsKey] ? item[grammsKey] : item[mlKey];
  const labels = { energy: "Энергетическая ценность", protein: "Белок" };
  return (
    <div className="food-item">
      {item.name}
      <div className="bullet" />
      <div className="list-item-header">{item.id}</div>
      <div>
        {Object.keys(nutritionParams).map(key => {
          return (
            <div>
              <div>{labels[key]}</div>
              <div>{nutritionParams[key]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
