import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import QuestionForm from "../../components/forms/QuestionForm";
import { SurveyContext } from "../../services/survey/survey.context";

import Button from "react-bootstrap/Button";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import FadeIn from "../../animation/FadeIn";

export default function Survey() {
    const navigate = useNavigate();
    const { GetSurveyById, PostSurveyAnswer } = useContext(SurveyContext);
    const { userToken } = useContext(AuthenticationContext);
    const [surveyData, setSurveyData] = useState({
        title: "Default Survey Title",
        description: "Default survey description",
        createdAt: "",
        updatedAt: "",
        deadline: "",
        questions: [""],
        statistics: [],
        author: 0,
        _id: "",
    });
    const [surveyAnswer, setSurveyAnswer] = useState();
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    //Get Survey Data
    const getSurveyData = async () => {
        let data = await GetSurveyById(id);
        setSurveyData(data.data);
        setAnswerForm(data.data);
        console.log(data.data);
        setLoaded(true);
    };
    useEffect(() => {
        getSurveyData();
    }, []);
    //Set AnswerForm
    const setAnswerForm = (data) => {
        let answerForm = {
            survey: data._id,
            // userPk: data.author,
            answers: Array.from({ length: data.questions.length }, (_, i) =>
                Array.from(
                    {
                        length: data.questions[i].selections.length,
                    },
                    () => false
                )
            ),
        };
        console.log("answerform", answerForm);
        setSurveyAnswer(answerForm);
    };

    // const handleSubmit = async () => {
    //   console.log(JSON.stringify(surveyAnswer));
    //   const result = await PostSurveyAnswer(surveyAnswer, userToken);
    //   alert("답변이 저장되었습니다.");
    //   navigate(-1);
    // };

    const handleSubmit = async () => {
        // 모든 필수항목이 답변되었는지 확인
        for (let i = 0; i < surveyData.questions.length; i++) {
            if (surveyData.questions[i].isRequired && !surveyAnswer.answers[i]) {
                alert("Please answer all required questions.");
                return;
            }
        }
        console.log(JSON.stringify(surveyAnswer));
        const result = await PostSurveyAnswer(surveyAnswer, surveyData._id, userToken);
        alert("답변이 저장되었습니다.");
        // navigate(-1);
    };

    return (
        <>
            {loaded ? (
                <div className="Survey">
                    <FadeIn className="surveyWrapper" childClassName="childClassName">
                        <div className="text-wrapper">
                            <div className="surveyTitle">{surveyData.title}</div>
                            <div className="surveyDesc">{surveyData.description}</div>
                        </div>
                        <Form className="Form" onSubmit={handleSubmit}>
                            {surveyData.questions &&
                                surveyData.questions.map((q, index) => {
                                    console.log(`Question ${index + 1} is required: ${q.isRequired}`);
                                    return (
                                        <QuestionForm
                                            forCreate={false}
                                            type={q.type}
                                            q={q}
                                            qIndex={index}
                                            key={q._id}
                                            answer={surveyAnswer.answers[index]}
                                            style={q.isRequired ? { boxShadow: " rgba(28, 88, 66, 0.6) 0px 4px 4px 0px" } : { boxShadow: "rgba(100, 100, 111, 0.2) 0px 4px 4px 0px" }} //필수항목 초록색 그림자
                                        />
                                    );
                                })}
                        </Form>
                        <div className="ButtonWrapper">
                            <div className="SurveyBtnWrapper">
                                <Button className="submit-btn" type="submit" variant="outline-success" onClick={handleSubmit}>
                                    Submit Answer
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            ) : null}
        </>
    );
}
