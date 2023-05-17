import React, { useState, useRef, useContext, useEffect, useCallback } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../../components/forms/QuestionForm";
import AddingOption from "../../components/forms/AddingOption";

import Button from "react-bootstrap/Button";

import "../Survey/Survey.css";
import { ConfirmSurveyModal, LinkModal } from "../../components/Modal/ConfirmSurveyModal";
import FadeIn from "react-fade-in/lib/FadeIn";
import { SurveyContext } from "../../services/survey/survey.context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { SiProbot } from "react-icons/si";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const mockData = {
    type: "NORMAL",
    title: "AI GENERATED FORM",
    deadline: "2023-05-09T13:10:54.310Z",
    questions: [
        {
            title: "당신은 사람입니까",
            type: "RADIO",
            selections: [
                {
                    type: "LETTER",
                    content: "예",
                },
                {
                    type: "LETTER",
                    content: "아니오",
                },
            ],
        },
        {
            title: "A-Form을 어떻게 알게 되었습니까",
            type: "CHECKBOX",
            selections: [
                {
                    type: "LETTER",
                    content: "TV를 통해서",
                },
                {
                    type: "LETTER",
                    content: "지인들이 알려줘서",
                },
                {
                    type: "LETTER",
                    content: "Instagram을 통해서",
                },
            ],
        },
    ],
    description: "string",
};
function CreateSurvey() {
    // react state
    const navigate = useNavigate();

    // User Token, isLogin
    const { userToken, isLogin } = useContext(AuthenticationContext);

    // survey state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([]); //index, state(어떤 타입의 질문인지)
    const nextCardId = useRef(0); // surveyCard 아이디

    const toastPromise = (promise) => {
        toast.promise(promise, {
            pending: "pending",
            success: {
                render() {
                    return `Complete!`;
                },
                onClose: () => setConfirmModalShow(true),
            },
            error: "Promise rejected 🤯",
        });
    };

    // ai state //
    const [aiIsLoading, setAiIsLoading] = useState(false);
    const AIGenerateHandler = () => {
        if (!saveIsLoading) {
            setAiIsLoading(true);
            setTimeout(() => {
                const msg = "축구와 관련된 내용을 json으로 만들어줘";
                console.log(AIGenerateSurvey(msg, userToken));
                setTitle(mockData.title);
                setQuestions(mockData.questions);
                setAiIsLoading(false);
            }, 3000);
        }
    };

    // Save state
    const [saveIsLoading, setSaveIsLoading] = useState(false);
    const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 1000));
    const saveSurveyHandler = () => {
        if (!aiIsLoading) {
            setSaveIsLoading(true);
            toastPromise(resolveAfter3Sec);
            setTimeout(() => {
                setSaveIsLoading(false);
            }, 3000);
        }
    };

    // Create
    const { CreateSurvey, AIGenerateSurvey } = useContext(SurveyContext); // Form 작성 완료 handler를 context에서 불러온다

    // Not login hanlder
    const CheckLogin = () => {
        if (isLogin == false) {
            alert("로그인이 필요한 서비스 입니다.");
            navigate(-1);
        }
    };
    useEffect(() => {
        // CheckLogin();
    }, []);

    /* Modal */
    // Modal state
    const [linkModalShow, setLinkModalShow] = useState(false);
    const [confirmModalShow, setConfirmModalShow] = useState(false);
    const [deadline, setDeadline] = useState("");
    const [surveyId, setSurveyId] = useState("");
    // Modal Function
    const handleClose = () => {
        setLinkModalShow(false);
        navigate("/");
    };
    const handleConfirmModalClose = () => {
        setConfirmModalShow(false);
    };

    // Submit
    const handleSubmit = async () => {
        const type = "NORMAL";
        setConfirmModalShow(false);
        let newId = await CreateSurvey(type, deadline, title, description, questions, userToken);
        setSurveyId(newId);
        setLinkModalShow(true);
    };
    // When click "Complete Form" Button
    const handleCreate = useCallback(
        (title) => {
            if (title === "") {
                alert("enter in a title");
                return;
            } else {
                setConfirmModalShow(true);
            }
        },
        [confirmModalShow]
    );

    // TODO : X 표시를 누르면 해당 문제의 정보가 삭제된다.
    const delQuestion = useCallback((index) => {
        questions.splice(index, 1);
        nextCardId.current -= 1;
        setQuestions([...questions]);
    });

    const addQuestion = useCallback((input) => {
        if (questions == null) {
            questions.push({
                type: input,
                title: "",
                selections: [],
                id: nextCardId.current,
            });
        } else {
            questions.push({
                type: input,
                title: "",
                selections: [],
                id: nextCardId.current,
            });
        }
        nextCardId.current += 1;
        setQuestions([...questions]);
    });

    const FormBtnWrapper = React.memo(() => {
        return (
            <div className="ButtonWrapper">
                <AddingOption addQuestion={addQuestion}></AddingOption>
                <div className="SurveyBtnWrapper">
                    <Button variant={aiIsLoading ? "primary" : "outline-primary"} disabled={aiIsLoading} onClick={aiIsLoading ? null : AIGenerateHandler}>
                        {aiIsLoading ? <Spinner className="icon" as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> : <SiProbot className="icon-svg" />}
                        AI Generate
                    </Button>

                    <Button className="submit-btn" type="submit" variant="outline-success" disabled={saveIsLoading} onClick={saveIsLoading ? null : () => saveSurveyHandler()}>
                        Save Form
                    </Button>

                    <Button className="delete-btn" type="submit" variant="outline-danger" onClick={() => navigate("/", { replace: true })}>
                        Delete Form
                    </Button>
                </div>
            </div>
        );
    });
    return (
        <div className="CreateSurvey Survey">
            <FadeIn className="surveyWrapper" childClassName="childClassName">
                <ConfirmSurveyModal modalShow={confirmModalShow} handleModalClose={handleConfirmModalClose} onSubmit={handleSubmit} />
                <LinkModal modalShow={linkModalShow} handleModalClose={handleClose} surveyId={surveyId} />

                <div className="text-wrapper">
                    <input
                        className="surveyTitle"
                        type="text"
                        value={title}
                        placeholder="Create Form"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <input
                        className="surveyDesc"
                        type="text"
                        value={description}
                        placeholder="Form Description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                <FormBtnWrapper />

                <Form className="Form">
                    {questions.map((q, index) => {
                        return <QuestionForm forCreate={true} type={q.type} delQuestion={delQuestion} q={q} qIndex={index} key={q.id} questions={questions} setQuestions={setQuestions} />;
                    })}
                </Form>
            </FadeIn>
        </div>
    );
}

export default CreateSurvey;
