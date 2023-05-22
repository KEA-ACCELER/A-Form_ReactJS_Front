import axios from "axios";

const POST_API_URL = process.env.REACT_APP_POST_API_URL;

export const CreatePost = async (postTitle, postDesc, postSurvey, userPk) => {
    // send newSurvey to database
    const options = { headers: { accept: "application/json", "Content-Type": "application/json" } };
    const newPost = {
        postTitle: postTitle,
        postDesc: postDesc,
        postSurvey: postSurvey,
        author: userPk,
        postStartDate: "2023-05-18T08:21:18.695Z",
        postDueDate: "2023-05-18T08:21:18.695Z",
    };
    console.log(newPost);

    const postId = await axios
        .post(`${POST_API_URL}/api/post/create`, newPost, options)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return postId;
};

export const GetPost = async (postPk) => {
    const res = await axios
        .get(`${POST_API_URL}/api/post/getPost/${postPk}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return res;
};
