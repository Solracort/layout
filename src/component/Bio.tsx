import React from "react";
import '../../src/App.css';
import { useParams } from "react-router-dom";
import {English} from './IntroEnglish';
import {Spanish} from './IntroSpanish';

export const Bio = () => {
        const params = useParams()
        let isEnglish = (params.lang ==="ENG")
            if (isEnglish){return <English />}
            else{return <Spanish />}
       
};
