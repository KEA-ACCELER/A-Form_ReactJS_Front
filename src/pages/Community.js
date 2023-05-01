import "./Community.css";
import { HotAvsBSurvey, HotCategory, HotSurvey } from "../components/HotSurvey";

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
                <HotAvsBSurvey />
                <HotAvsBSurvey />
                <HotAvsBSurvey />
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
                    <HotSurvey />
                    <HotSurvey />
                    <HotSurvey />
                    <HotSurvey />
                    <HotSurvey />
                </div>
                <div className="hotCategoryWrapper">
                    <div className="title2Wrapper">
                        <h5>Hot 분야</h5>
                        <a>더보기</a>
                    </div>
                    <HotCategory />
                    <HotCategory />
                    <HotCategory />
                    <HotCategory />
                    <HotCategory />
                </div>
            </div>
        </div>
    );
};
