import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SurveyList = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState();
    const [showList, setShowList] = useState(false);
    const getFormData = async () => {
        const result = await axios.get("http://localhost:3010/surveys?page=1&offset=10&progressStatus=all&sort=desc");
        console.log(result);
        setFormData(result.data.data);
        setShowList(true);
    };
    useEffect(() => {
        getFormData();
    }, []);

    return (
        <div className="SurveyList">
            {showList ? (
                <>
                    <h3>Form List</h3>
                    {formData.map((it) => (
                        <div key={it._id} className="formListElem" onClick={() => navigate(`/survey/${it._id}`)}>
                            Title : {it.title}
                        </div>
                    ))}
                </>
            ) : (
                <div>{String(typeof formData)}</div>
            )}
        </div>
    );
};
