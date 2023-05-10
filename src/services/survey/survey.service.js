import axios from "axios";

const SURVEY_API_URL = process.env.REACT_APP_SURVEY_API_URL;
const AI_API_URL = process.env.REACT_APP_AI_API_URL;

export const CreateSurvey = (type, deadline, title, description, questions, userToken) => {
    // send newSurvey to database
    const options = { headers: { accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${userToken}` } };
    const q = questions;
    q.map((it) => {
        delete it["id"];
    });
    const newSurvey = {
        type: type,
        title: title,
        description: description,
        deadline: "2023-05-04T12:50:18.171Z",
        questions: q,
    };
    console.log("newSurvey :asdfasdfsa ", newSurvey);
    console.log("token : ", userToken);
    const formId = axios
        .post(`${SURVEY_API_URL}/surveys`, newSurvey, options)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return formId;
};

export const DeleteSurvey = async (surveyid, userToken) => {
    const options = { headers: { accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${userToken}` } };

    const result = await axios
        .delete(`${SURVEY_API_URL}/surveys/${surveyid}`, options)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    return result;
};
export const GetSurveyData = async (page, offset, status, sort) => {
    const result = await axios.get(`${SURVEY_API_URL}/surveys?page=${page}&offset=${offset}&progressStatus=${status}&sort=${sort}`);
    // console.log(result.data);
    return result;
};

export const GetSurveyById = async (id) => {
    const result = await axios.get(`${SURVEY_API_URL}/surveys/${id}`);
    console.log(result.data);
    return result;
};

export const PostSurveyAnswer = async (surveyAnswer, userToken) => {
    const options = { headers: { accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${userToken}` } };
    console.log("answer: ", surveyAnswer);

    const result = await axios
        .post(`${SURVEY_API_URL}/answers`, surveyAnswer, options)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    return result;
};

export const AIGenerateSurvey = async (msg, userToken) => {
    const options = { headers: { accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${userToken}` } };
    const body = {
        msg: msg,
    };
    const result = await axios
        .post(`${AI_API_URL}/chatbot`, body, options)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    return result;
};
