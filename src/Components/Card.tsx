import React from "react";
import {CardContainer} from "../styles/Components";


type CardPropsType = {
    text: string;
}
export const Card: React.FC<CardPropsType> = (props) => {
    return (
        <CardContainer>{props.text}</CardContainer>
    )
}
