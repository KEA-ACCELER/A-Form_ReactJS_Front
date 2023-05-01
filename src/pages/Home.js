import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FormList } from "../components/FormList";
import Bg from "../assets/images/form-bg.png";

export default function Home() {
    const navigation = useNavigate();

    return (
        <div className="Home">
            <div className="homeTopWrapper">
                <div className="homeLeftWrapper">
                    <h1 className="title">Welcome to our A-Form</h1>
                    <p className="catchPhrase">An online form for everyone</p>
                    <div className="homeBtnWrapper">
                        <Button
                            className="homeBtn"
                            onClick={() => navigation("/community")}
                        >
                            Do Survey
                        </Button>
                        <Button
                            className="homeBtn"
                            onClick={() => navigation("/create")}
                            variant="outline-primary"
                        >
                            Create Form
                        </Button>
                    </div>
                </div>
                <img src={Bg} className="homeImg" />
            </div>
            <FormList />
        </div>
    );
}
