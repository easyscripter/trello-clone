import React, {useRef} from "react";
import {CardContainer} from "../styles/Components";
//import {useDispatch} from "react-redux";
import {useItemDrag} from "../hooks/useItemDrag";
import {useItemDrop} from "../hooks/useItemDrop";


type CardPropsType = {
    text: string;
    index: number;
    id: string;
    columnId: string;
}
export const Card: React.FC<CardPropsType> = (props) => {
    //const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const {drag} = useItemDrag({
        type: 'CARD',
        id: props.id,
        index: props.index,
        text: props.text,
        columnId: props.columnId,
    });
    const {drop} = useItemDrop(0, props.id);

    drag(drop(ref));

    return (
        <CardContainer ref={ref}>{props.text}</CardContainer>
    )
}
