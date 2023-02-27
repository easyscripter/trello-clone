import {ColumnContainer, ColumnTitle} from "../styles/Components";
import React from "react";
import {AddNewItem} from "./AddNewItem";
import {useDispatch} from "react-redux";
import {addTask} from "../store/slices/listsSlice";


type ColumnPropsType = {
    title: string;
    id: string;
}

export const Column: React.FC<React.PropsWithChildren<ColumnPropsType>> = (props) => {
    const dispatch = useDispatch();
    const addNewTask = (text: string) => {
        dispatch(addTask({taskId: props.id, text}))
    }

    return (
        <ColumnContainer>
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
