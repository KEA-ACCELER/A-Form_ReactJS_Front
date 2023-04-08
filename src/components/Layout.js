import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../App";

export default function Layout() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    console.log(isLoggedIn)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        <b>A-Form</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/")}>
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={() => navigate("/about")}>
                                About
                            </Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Developed by:{" "}
                            <a href="https://acceler.kr">Team ACCELER</a>
                        </Navbar.Text>
                        <Nav>
                            <Nav.Link href="https://github.com/KEA-ACCELER/a-form">
                                <FaGithub size={24} />
                            </Nav.Link>
                        </Nav>
                        {isLoggedIn ? (
                            <>
                            <Nav.Link onClick={() => navigate("/my-page")}>
                                마이페이지
                            </Nav.Link>
                            <Nav.Link onClick={() => navigate("/logout")}>
                                로그아웃
                            </Nav.Link>
                        </>)
                            : (<>
                            <Nav.Link onClick={() => navigate("/register")}>
                                회원가입
                            </Nav.Link>
                            <Nav.Link onClick={() => navigate("/login")}>
                                    로그인
                            </Nav.Link>
                            </>)}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}
