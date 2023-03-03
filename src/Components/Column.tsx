import {ColumnContainer, ColumnTitle} from "../styles/Components";
import React, {useRef} from "react";
import {AddNewItem} from "./AddNewItem";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../store/slices/listsSlice";
import {useItemDrag} from "../hooks/useItemDrag";
import {DragItem} from "../types";
import {RootState} from "../store/store";
import {isHidden} from "../utils/isHidden";
import {useItemDrop} from "../hooks/useItemDrop";


type ColumnPropsType = {
    title: string;
    id: string;
    index: number;
    isPreview?: boolean;
}

export const Column: React.FC<React.PropsWithChildren<ColumnPropsType>> = (props) => {
    const draggedItem = useSelector<RootState, DragItem | undefined>(state => state.lists.draggedItem);
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const {drag} = useItemDrag({
        type: 'COLUMN',
        id: props.id,
        index: props.index,
        text: props.title,
    });


    const {drop} = useItemDrop(props.index, '0');

    drag(drop(ref));
    const addNewTask = (text: string) => {
        dispatch(addTask({taskId: props.id, text}))
    }

    return (
        <ColumnContainer
            ref={ref}
            isPreview={props.isPreview}
            isHidden={isHidden(props.isPreview, draggedItem, "COLUMN", props.id)}
        >
            <ColumnTitle>{props.title}</ColumnTitle>
            {props.children}
            <AddNewItem
                onAdd={addNewTask}
                dark={true}
                toggleButtonText="+ Добавить задачу"
            />
        </ColumnContainer>
    )
}
