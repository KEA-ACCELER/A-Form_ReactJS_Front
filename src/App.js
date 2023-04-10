import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CreateSurvey from "./components/CreateSurvey";
import Survey from "./components/Survey";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";

import LoginForm from "./components/LoginForm";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form";
import axios from "axios";

export const FormHandlingContext = React.createContext();
export const FormStateContext = React.createContext();
export const AuthContext = React.createContext();
export const IdContext = React.createContext();

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );
    const [surveyId, setSurveyId] = useState(); // 전체 forms 의 id를 관리하는 변수
    const [formData, setFormData] = useState([]); //Form 전체 데이터 관리 state

    // Create
    const onCreate = (formTitle, formDesc, questions) => {
        // send newSurvey to database
        const options = { headers: { "Content-Type": "application/json" } };
        const newSurvey = {
            // surveyPk: nextSurveyId.current,
            surveyTitle: formTitle,
            surveyDescription: formDesc,
            questions: JSON.stringify([...questions]),
            userId: "asdf", // 로그인 한 사람 아이디 동적으로 바뀌게 수정 필요
        };
        console.log("Axios newsurey : ", newSurvey);
        axios
            .post("/api/survey/create", newSurvey, options)
            .then((response) => {
                console.log(response.data.surveyPk);
                setSurveyId(response.data.surveyPk);
                const newForm = {
                    id: response.data.surveyPk,
                    formTitle: formTitle,
                    formDesc: formDesc,
                    questions: [...questions],
                };
                formData === []
                    ? setFormData([newForm])
                    : setFormData([...formData, newForm]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <FormStateContext.Provider value={formData}>
                <IdContext.Provider value={surveyId}>
                    <FormHandlingContext.Provider value={{ onCreate }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<Home />} />
                                    <Route path="about" element={<About />} />
                                    <Route
                                        path="create"
                                        element={<CreateSurvey />}
                                    />
                                    <Route
                                        path="survey/:id"
                                        element={<Survey />}
                                    />
                                    <Route
                                        path="register"
                                        element={<RegisterForm />}
                                    />
                                    <Route
                                        path="login"
                                        element={<LoginForm />}
                                    />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </FormHandlingContext.Provider>
                </IdContext.Provider>
            </FormStateContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
