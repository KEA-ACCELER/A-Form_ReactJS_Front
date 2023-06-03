import React from "react";

export const StatListItem = ({ item, questionNumber }) => {
  return (
    <div className="StatListItem">
      <h3>{`Question ${questionNumber}`}</h3>
      <ul>
        {item.values.map((value) => (
          <li key={value.answer}>
            Answer: {value.answer}, Count: {value.count}, Percent: {value.percent}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatListItem;
