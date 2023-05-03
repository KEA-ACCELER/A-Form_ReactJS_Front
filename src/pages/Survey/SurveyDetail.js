import React, { useState, useEffect } from "react";
import "./SurveyDetail.css";
import { Button, Card, Collapse } from "react-bootstrap";
import { Comment } from "../../components/Comment";
import { useNavigate } from "react-router-dom";

export const SurveyDetail = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="SurveyDetail">
            <div>
                <div className="topWrapper">
                    <div className="descWrapper">
                        <div className="title">hi</div>
                        <div className="desc">hello</div>
                    </div>
                    <div className="buttonWrapper">
                        <Button
                            variant="primary"
                            onClick={() => navigate("/survey/32")}
                        >
                            Enter Survey
                        </Button>
                    </div>
                </div>
                <div className="statistics">
                    <h3>통계</h3>
                    <Button
                        variant=""
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        click
                    </Button>
                </div>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <Card body style={{ width: "400px" }}>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes
                            anderson cred nesciunt sapiente ea proident.
                        </Card>
                    </div>
                </Collapse>
            </div>
            <div className="commentBox">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <div className="commentBarWrapper">
                    {/* <div className="commentLabel">댓글 쓰기</div> */}
                    <input type="text" className="commentBar" />
                    <Button id="submitBtn">등록</Button>
                </div>
            </div>
        </div>
    );
};
