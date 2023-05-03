import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import "./Comment.css";
import { FiMoreVertical } from "react-icons/fi";

export const Comment = ({ author, content }) => {
    const popover = (
        <Popover>
            <Popover.Body className="commentPopover">
                <button className="commentMoreBtn">수정</button>
                <button className="commentMoreBtn">삭제</button>
            </Popover.Body>
        </Popover>
    );
    return (
        <div className="Comment">
            <div className="commentLeft">
                <div className="nickname">{author}</div>
                <div className="content"> {content}</div>
            </div>

            <OverlayTrigger
                trigger="click"
                placement="left"
                overlay={popover}
                delay={1}
            >
                <button className="commentMoreBtn">
                    <FiMoreVertical />
                </button>
            </OverlayTrigger>
        </div>
    );
};
