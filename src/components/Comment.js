import "./Comment.css";
import { FiMoreVertical } from "react-icons/fi";

export const Comment = () => {
    return (
        <div className="Comment">
            <div className="commentLeft">
                <div className="nickname">닉네임</div>
                <div className="content"> This is a nice survey</div>
            </div>
            <FiMoreVertical />
        </div>
    );
};
