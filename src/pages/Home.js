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
<<<<<<< HEAD
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
=======
                            onClick={() => navigation("/create")}
                        >
                            Create Form
                        </Button>
                        <Button
                            className="homeBtn"
                            onClick={() => navigation("/about")}
                            variant="outline-primary"
                        >
                            About Form
>>>>>>> 85ff90aeb435b03bf56be1f3fe376d6e732243e0
                        </Button>
                    </div>
                </div>
                <img src={Bg} className="homeImg" />
            </div>
            <FormList />
        </div>
    );
}
