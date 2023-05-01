import { Button } from "react-bootstrap";
import "./Community.css";
import AB from "../assets/images/AB.png";
export const Community = () => {
    return (
        <div className="Community">
            {/* <input type="text"></input>
            <Button>create survey</Button>
            <div>top bar</div> */}
            <div className="titleWrapper">
                <h4 className="title">박빙설문 a대 b</h4>
                <a>더보기</a>
            </div>
            <div className="AvsBWrapper">
                <div className="formWrapper">
                    <img src={AB} />
                    <p className="AvsBTitle">설문1</p>
                </div>
                <div className="formWrapper">
                    <img src={AB} />
                    <p className="AvsBTitle">설문1</p>
                </div>
                <div className="formWrapper">
                    <img src={AB} />
                    <p className="AvsBTitle">설문1</p>
                </div>
            </div>
            <div className="titleWrapper">
                <h4 className="title">많이 본 설문</h4>
            </div>
            <div className="bottomWrapper">
                <div className="hotSurveyWrapper">
                    <div className="title2Wrapper">
                        <h5>Hot 설문</h5>
                        <a>더보기</a>
                    </div>
                    <div className="hotSurvey">
                        <p className="surveyTitle">어쩌구 저쩌구 1</p>
                        <p className="date">2023. 03. 01</p>
                        <p className="status">진행중</p>
                    </div>
                    <div className="hotSurvey">
                        <p className="surveyTitle">어쩌구 저쩌구 1</p>
                        <p className="date">2023. 03. 01</p>
                        <p className="status">진행중</p>
                    </div>
                    <div className="hotSurvey">
                        <p className="surveyTitle">어쩌구 저쩌구 1</p>
                        <p className="date">2023. 03. 01</p>
                        <p className="status">진행중</p>
                    </div>
                </div>
                <div className="hotCategoryWrapper">
                    <div className="title2Wrapper">
                        <h5>Hot 분야</h5>
                        <a>더보기</a>
                    </div>
                    <div className="hotSurvey">
                        <p className="surveyTitle">어쩌구 저쩌구 1</p>
                    </div>
                    <div className="hotSurvey">
                        <p className="surveyTitle">어쩌구 저쩌구 1</p>
                    </div>
                    <div className="hotSurvey">
                        <p className="surveyTitle">어쩌구 저쩌구 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
