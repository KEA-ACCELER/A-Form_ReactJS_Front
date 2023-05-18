import axios from "axios";

const POST_API_URL = process.env.REACT_APP_POST_API_URL;

export const CreatePost = (postTitle, postDesc, postSurvey, userToken) => {
    // send newSurvey to database
    const options = { headers: { accept: "application/json", "Content-Type": "application/json" } };
    const newPost = {
        postTitle: postTitle,
        postDesc: postDesc,
        postSurvey: postSurvey,
        author: userToken,
    };

    const postId = axios
        .post(`${POST_API_URL}/api/post/create`, newPost, options)
        .then((response) => {
            console.log(response.data);
            alert(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
    console.log(postId);
    return postId;
};
