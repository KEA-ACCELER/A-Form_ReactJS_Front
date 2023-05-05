import "./Community.css";
import { HotAvsBSurvey, HotCategory, SurveyListItem } from "../../components/SurveyListItem";
import FadeIn from "react-fade-in/lib/FadeIn";
import { SurveyList } from "../SurveyList/SurveyList";

export const Community = () => {
    return (
        <FadeIn className="Community" childClassName="childClassName">
            <div className="titleWrapper">
                <h2 className="pageTitle">Community</h2>
            </div>

            <div className="titleWrapper">
                <h4 className="title">많이 본 설문</h4>
            </div>
            <div className="bottomWrapper">
                <div className="hotSurveyWrapper hvr-float">
                    <div className="title2Wrapper">
                        <h5>Hot 설문</h5>
                        <p>더보기</p>
                    </div>
                    <SurveyListItem title="설문지 123" />
                    <SurveyListItem status="CLOSED" />
                    <SurveyListItem />
                    <SurveyListItem />
                    <SurveyListItem status="CLOSED" />
                </div>
                <div className="hotCategoryWrapper hvr-float">
                    <div className="title2Wrapper">
                        <h5>Hot 분야</h5>
                        <p>더보기</p>
                    </div>
                    <HotCategory />
                    <HotCategory />
                    <HotCategory />
                    <HotCategory />
                    <HotCategory />
                </div>
            </div>
            <div className="titleWrapper">
                <h4 className="title">박빙설문 a대 b</h4>
                <p>더보기</p>
            </div>
            <div className="AvsBWrapper hvr-float">
                <HotAvsBSurvey />
                <HotAvsBSurvey />
                <HotAvsBSurvey />
            </div>
            <div className="titleWrapper all ">
                <h4 className="title">전체 설문</h4>
                <p>더보기</p>
            </div>
            <div className="sucveyListWrapper hvr-float">
                <SurveyList />
            </div>
        </FadeIn>
    );
};
