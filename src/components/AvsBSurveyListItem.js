import React from "react";
import { useNavigate } from "react-router-dom";
import "./AvsBSurveyListItem.css";

export const AvsBSurveyListItem = ({ title, id, author, imgFileA, imgFileB, A, B, ADesc, BDesc }) => {
  const navigate = useNavigate();
  return (
    <div className="AvsBSurveyListItem" onClick={() => navigate(`/details/${id}`)}>
      <img className="surveyImg" src={imgFileA} alt="" />
      <p className="surveyTitle">{title}</p>
      <p className="author">작성자 : {author}</p>
      <div className="ABContent">
        <p className="ABTitle">{A}</p>
        <p className="ABDesc">{ADesc}</p>
        {imgFileA && <img className="ABImage" src={imgFileA} alt="" />}
      </div>
      <div className="ABContent">
        <p className="ABTitle">{B}</p>
        <p className="ABDesc">{BDesc}</p>
        {imgFileB && <img className="ABImage" src={imgFileB} alt="" />}
      </div>
    </div>
  );
};
