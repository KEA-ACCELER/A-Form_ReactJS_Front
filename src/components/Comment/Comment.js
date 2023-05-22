import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import "./Comment.css";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export const Comment = (props) => {
    const [show, setShow] = useState(false);
    const [liked, setLiked] = useState(false);
    const onEdit = () => {
        setShow(false);
    };
    const onDelete = () => {
        setShow(false);
    };
    const popover = (
        <Popover>
            <Popover.Body className="commentPopover">
                <button className="commentMoreBtn" onClick={onEdit}>
                    수정
                </button>
                <button className="commentMoreBtn" onClick={onDelete}>
                    삭제
                </button>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="Comment">
            <div className="commentLeft">
                <div className="nickname">{props.commentAuthor}</div>
                <div className="content"> {props.commentContent}</div>
            </div>
            <div className="commentRight">
                <div className="dateTimeWrapper">
                    <div className="date">
                        {props.createdDate[0]}. {props.createdDate[1]}. {props.createdDate[2]}. {props.createdDate[3]} : {props.createdDate[4]}
                    </div>
                </div>
                <div className="likes">좋아요 : 0개</div>
                <div onClick={() => setLiked(!liked)}>{liked ? <AiFillHeart size={24} color="red" /> : <AiOutlineHeart size={24} />}</div>

                <OverlayTrigger trigger="click" placement="right" overlay={popover} delay={1} show={show}>
                    <button className="commentMoreBtn" onClick={() => setShow(!show)}>
                        <FiMoreVertical size={24} />
                    </button>
                </OverlayTrigger>
            </div>
        </div>
    );
};
