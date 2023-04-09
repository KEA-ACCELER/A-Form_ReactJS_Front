import React, { useState, useEffect, useRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import QuestionForm from "./forms/QuestionForm";
import AddingOption from "./forms/AddingOption";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FormHandlingContext } from "../App";
import Axios from 'axios';

export default function Survey() {

  const [data, setData] = useState({
    surveyPk: 1,
    surveyTitle: "test",
    surveyDescription: "test survey",
    questions: "[{\"id\": 0,\"questionTitle\": \"test question\",\"questionType\": 1, \"item\": [\"test1\", \"test2\", \"test3\"]},{\"id\": 1,\"questionTitle\": \"test question2\",\"questionType\": 2,\"item\": [\"test4\", \"test5\", \"test6\"]}]",
    author: "test"
  });

  let a = [];
  for (let i = 0; i < data.questions.length; i++) {
    a.push([]);
  }
  const [surveyAnswer, setSurveyAnswer] = useState({
    surveyPk: 1,
    userId: "test",
    answers: a,
  });
  // useEffect(() => {
  //   Axios.get(`http://localhost:8080/survey/${data.surveyPk}/`).then((response) => {
  //     setData(response.data);
  //   });

  // }, []);

  const options = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  function handleSubmit(e) { // 버튼누르면 응답 제출 
    e.preventDefault();
    console.log(surveyAnswer);

    Axios.post("http://localhost:8080/surveyAnswer", surveyAnswer, options).then(response => {
    }).catch((err) => { console.log(err) });
  }
  return (
    <Container className="CreateSurvey">
      <div className="text-wrapper">
        <div className="surveyTitle">
          {data.surveyTitle}
        </div>
        <div className="surveyDesc">
          {data.surveyDescription}
        </div>
      </div>
      <div className="ButtonWrapper">
        <div className="SurveyBtnWrapper">
          <Button
            className="submit-btn"
            type="submit"
            variant="outline-success"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit Answer
          </Button>
        </div>
      </div>
      <Form className="Form" onSubmit={handleSubmit}>
        {data.questions.map((q, index) => {
          return (
            <QuestionForm
              forCreate={false}
              questionType={q.questionType}
              q={q}
              qIndex={index}
              key={q.id}
            />
          );
        })}
      </Form>
    </Container>
  );
}
