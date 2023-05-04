import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import QuestionForm from "../../components/forms/QuestionForm";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import FadeIn from "react-fade-in/lib/FadeIn";
import axios from "axios";

export default function Survey() {
    const [surveyData, setSurveyData] = useState({
        title: "Default Survey Title",
        description: "Default survey description",
        createdAt: "",
        updatedAt: "",
        deadline: "",
        questions: [],
        statistics: [],
        author: 0,
        _id: "",
    });
    const [surveyAnswer, setSurveyAnswer] = useState();
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    //Get Survey Data
    const getSurveyData = async () => {
        let data = await axios.get(`http://localhost:3010/surveys/${id}`);
        setSurveyData(data.data);
        setAnswerForm();
        console.log(data.data);
        setLoaded(true);
    };
    useEffect(() => {
        getSurveyData();
    }, []);

    //Set AnswerForm
    const setAnswerForm = () => {
        let answerForm = {
            surveyPk: id,
            userPk: surveyData.author,
            answer: Array.from({ length: surveyData.questions.length }, (_, i) =>
                Array.from(
                    {
                        length: surveyData.questions[i].item.length,
                    },
                    () => false
                )
            ),
        };
        console.log(answerForm);
        setSurveyAnswer(answerForm);
    };

    function handleSubmit(e) {
        // 버튼누르면 응답 제출
        e.preventDefault();
        surveyAnswer.answer = JSON.stringify(surveyAnswer.answer);
        console.log(surveyAnswer);

        Axios.post("http://localhost:8080/api/surveyAnswer", surveyAnswer, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {loaded ? (
                <Container className="CreateSurvey">
                    <FadeIn>
                        <div className="text-wrapper">
                            <div className="surveyTitle">{surveyData.title}</div>
                            <div className="surveyDesc">{surveyData.description}</div>
                        </div>
                        <Form className="Form" onSubmit={handleSubmit}>
                            <div className="ButtonWrapper">
                                <div className="SurveyBtnWrapper">
                                    <Button className="submit-btn" type="submit" variant="outline-success">
                                        Submit Answer
                                    </Button>
                                </div>
                            </div>
                            {surveyData.questions &&
                                surveyData.questions.map((q, index) => {
                                    // return <QuestionForm forCreate={false} type={q.type} q={q} qIndex={index} key={q._id} answer={surveyAnswer.answer[index]} />;
                                })}
                        </Form>
                    </FadeIn>
                </Container>
            ) : null}
        </>
    );
}
