import React, { useState, useEffect, useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import { SurveyContext } from "../../../services/survey/survey.context";

export const StatListItem = ({ item, questionNumber, surveyId, questionTitle, selections }) => {
  const { GetSurveyById } = useContext(SurveyContext);
  const [surveyData, setSurveyData] = useState(null);

  let data = selections
    ? item.values.map((value, index) => ({
        id: (selections[index] && selections[index].content) || "Not defined",
        value: value.count,
      }))
    : [];

  if (item.type === "SHORTFORM") {
    return (
      <div className="StatListItem">
        <h3>{`Question ${questionNumber}:  ${questionTitle}`}</h3>
        <p>주관식문항은 통계를 내지 않음</p>
      </div>
    );
  }

  return (
    <div className="StatListItem">
      <h3>{`Question ${questionNumber}:  ${questionTitle}`}</h3>
      <div className="selections">
        <ul>
          {selections &&
            item.values.map((value, index) => (
              <li key={value.answer}>
                {selections[index].content}, Percent: {value.percent}%
              </li>
            ))}
        </ul>
      </div>
      <div className="pieChart" style={{ height: "300px" }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeInnerRadiusOffset={2}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "set3" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 35,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default StatListItem;
