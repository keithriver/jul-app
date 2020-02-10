import React from "react";
import "./item.css";
const grammsKey = "nutrition-per-100g";
const mlKey = "nutrition-per-100ml";

export const Item = ({ item }) => {
  const nutritionParams = item[grammsKey] ? item[grammsKey] : item[mlKey];
  console.log(nutritionParams);
  const labels = {
    energy: "Energy",
    protein: "Protein",
    fat: "Fat",
    "saturated-fat": "Saturated fat",
    carbohydrate: "Carbohydrate",
    sugars: "Sugars",
    "dietary-fibre": "Dietary fibre",
    sodium: "Sodium"
  };
  return (
    <div className="food-item">
      <div className="food-name">{item.name}</div>
      <div>
        {Object.keys(nutritionParams).map(key => {
          return (
            <div className="food-parameter">
              <div className="label">{labels[key]}:</div>
              <div className="value">{nutritionParams[key]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
