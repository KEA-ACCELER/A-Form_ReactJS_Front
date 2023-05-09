import axios from "axios";
import React, { useEffect, useState } from "react";
import { AvsBSurveyListItem } from "../../components/AvsBSurveyListItem";
import "./AvsBSurveyList.css";

export const AvsBSurveyList = () => {
  const [formData, setFormData] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const getFormData = async () => {
      const result = await axios.get("http://localhost:3010/avsbsurveys");
      setFormData(result.data.data);
      setShowList(true);
    };
    getFormData();
  }, []);

  return (
    <div className="AvsBSurveyList">
      {showList ? (
        <>
          {formData.map((it) => (
            <AvsBSurveyListItem
              key={it._id}
              title={it.title}
              id={it._id}
              author={it.author}
              imgFileA={it.imgFileA}
              imgFileB={it.imgFileB}
              A={it.A}
              B={it.B}
              ADesc={it.ADesc}
              BDesc={it.BDesc}
            />
          ))}
        </>
      ) : (
        <div>{String(typeof formData)}</div>
      )}
    </div>
  );
};

AvsBSurveyList.defaultProps = {
  page: 1,
  offset: 10,
  progressStatus: "all",
  content: "",
  sort: "desc",
};
