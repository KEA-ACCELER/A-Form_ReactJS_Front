import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import CreateSurvey from "./pages/CreateSurvey/CreateSurvey";
import Survey from "./pages/Survey/Survey";
import About from "./pages/About/About";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import { CreateAvsB } from "./pages/CreateAvsB/CreateAvsB";
import { Community } from "./pages/Community/Community";
import { SurveyDetail } from "./pages/Survey/SurveyDetail";
import LoginForm from "./pages/LoginForm/LoginForm";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import Mypage from "./pages/Mypage/Mypage";
import Mypage_setting from "./pages/Mypage/Mypage_setting";

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
    const onCreate = (type, deadline, title, description, questions) => {
        // send newSurvey to database
        const options = { headers: { "Content-Type": "application/json" } };
        const newSurvey = {
            type: type,
            title: title,
            description: description,
            deadline: "",
            questions: JSON.stringify([...questions]),
            author: 0, // 로그인 한 사람 아이디 동적으로 바뀌게 수정 필요
        };
        console.log("Axios newsurey : ", newSurvey);
        axios
            .post("http://127.0.0.1:8080/api/survey/create", newSurvey, options)
            .then((response) => {
                console.log(response.data.surveyPk);
                setSurveyId(response.data.surveyPk);
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
                                    <Route path="mypage" element={<Mypage />} />
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
                                    <Route
                                        path="community"
                                        element={<Community />}
                                    />
                                    <Route
                                        path="AvsB"
                                        element={<CreateAvsB />}
                                    />
                                    <Route
                                        path="mypage_setting"
                                        element={<Mypage_setting />}
                                    />
                                    <Route
                                        path="details/:id"
                                        element={<SurveyDetail />}
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
