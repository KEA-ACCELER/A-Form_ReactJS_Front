import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import "./About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel 스타일
import Logo2 from "../../assets/images/logo2.png";
import x_icon from "../../assets/images/x_icon.png";
import check from "../../assets/images/check1.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import survey from "../../assets/images/3D_survey2.png";
import survey2 from "../../assets/images/3D_survey3.png";
import right_arrow from "../../assets/images/right_arrow.png";
import left_arrow from "../../assets/images/left_arrow.png";
import aform_media from "../../assets/images/media/A-form.mp4";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const solutions = [
    {
      key: "solution1",
      subcontainer1: "sol1_subcontainer1",
      imageSrc: check,
      solName: "Auto Form",
      content: (
        <>
          AI 기반 설문조사 자동 생성 기능을
          <br />
          제공하여 설문조사 작성에 소요되는
          <br />
          시간과 노력을 줄입니다.
        </>
      ),
    },
    {
      key: "solution2",
      subcontainer1: "sol2_subcontainer1",
      imageSrc: check,
      solName: "Auto Statistics",
      content: (
        <>
          주관식 답변 질문을 포함하여 설문조사
          <br />
          결과의 자동 요약을 제공하여 설문조사
          <br />
          결과의 정확성과 신뢰성을 향상시킵니다.
        </>
      ),
    },
    {
      key: "solution3",
      subcontainer1: "sol3_subcontainer1",
      imageSrc: check,
      solName: "Community",
      content: (
        <>
          커뮤니티 기능을 제공하여 설문조사
          <br />
          제작자와 응답자 간의 참여 및 피드백을
          <br />
          촉진하여 응답률을 높이고 고품질
          <br />
          데이터 수집을 보장합니다.
        </>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 3000); // 3000ms(3초)마다 순환

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  /*-------- scroll ---------*/

  return (
    <div className="About">
      <div className="page1">
        {/* <img src={Logo2} alt="" />
        <h4>
          <span className="A">A</span>mazing Form <br />
          <span className="A">A</span>utomatical Form <br /> By team <span className="A">A</span>CCELER !
        </h4> */}

        <video src={aform_media} width="100%" height="auto" style={{ objectFit: "contain" }} autoPlay loop />
      </div>{" "}
      <div className="page2">
        <div className="container1">
          <h4>
            <span className="Consideration">어떤 기능들을 고려해야 설문 제작자를 위한</span>
            <br />
            <span className="Consideration">서비스를 만들 수 있을지 고민했습니다</span>
          </h4>
          <div className="survey_img">
            <img src={survey} alt="" />
          </div>
        </div>
        <div className="container2">
          <div className="sentence1">
            <div className="sen1_subcontainer1">
              <img src={x_icon} alt="" />
              <span className="problem1">"설문 문항을 일일이 만들어야 해요"</span>
            </div>
            <div className="sen1_subcontainer2">
              <span className="hope1">설문 제작이 더 간편하고 자동화가 되었으면 좋겠습니다</span>
            </div>
          </div>

          <div className="sentence2">
            <div className="sen2_subcontainer1">
              <img src={x_icon} alt="" />
              <span className="problem1">"설문 결과가 쉽게 파악 되었으면 좋겠어요"</span>
            </div>
            <div className="sen2_subcontainer2">
              <span className="hope1">설문 결과를 요약하고 경향성을 확인하는 방법이 간단해졌으면 좋겠습니다</span>
            </div>
          </div>

          <div className="sentence3">
            <div className="sen3_subcontainer1">
              <img src={x_icon} alt="" />
              <span className="problem1">"설문이 응답자들에게 어떻게 보일까요"</span>
            </div>
            <div className="sen3_subcontainer2">
              <span className="hope1">응답자들이 대답하기에 적절한 질문인지를 확인하면 설문 응답률을 높일 수 있을 것 같습니다</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page3">
        <div className="goal">
          <span>
            A-Form의 목표는 설문 조사 생성 및 분석 프로세스를
            <br />
            단순화하고 능률화하면서 설문 조사 제작자와 응답자 간의
            <br />
            참여와 피드백을 높이는 것입니다
          </span>
        </div>

        <div className="goal_img">
          <img src={survey2} alt="" />
        </div>
      </div>
      <div className="page4">
        <div className="container0">
          <div className="onlyaform">오직, A-Form 에서만</div>
        </div>

        <div className="container1">
          <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} onChange={handleCarouselChange} autoPlay={true} interval={2000}>
            {solutions.map((solution, index) => (
              <div className={`card`} key={index}>
                <div className="solution_nametag">
                  <div className="solName">{solution.solName}</div>
                </div>

                <div className={solution.subcontainer1}>
                  <span className="hope1">{solution.content}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="developed-by">
        Developed by: <a href="https://acceler.kr">Team ACCELER</a>
        <FaGithub size={24} href="https://github.com/KEA-ACCELER/a-form" />
      </div>
    </div>
  );
}
