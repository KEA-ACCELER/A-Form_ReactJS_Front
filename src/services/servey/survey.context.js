import React, { createContext } from "react";

import { CreateSurvey } from "./survey.service";
import { GetSurveyData, GetSurveyById } from "./survey.service";

export const SurveyContext = createContext();

export const SurveyContextProvider = ({ children }) => {
    return (
        <SurveyContext.Provider
            value={{
                CreateSurvey,
                GetSurveyData,
                GetSurveyById,
            }}
        >
            {children}
        </SurveyContext.Provider>
    );
};
