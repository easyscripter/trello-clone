import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {findItemIndexById} from "../../utils/findItemIndexById";
import {moveItem} from "../../utils/moveItem";
import {DragItem} from "../../types";

export type TaskType = {
    id: string;
    text: string;
};

export type ListType = {
    id: string;
    title: string;
    tasks: Array<TaskType>
};

export type InitialStateType = {
    lists: Array<ListType>;
    draggedItem: DragItem | undefined;
};

export type TaskActionType = {
    taskId: string;
    text: string;
};

export type MoveListActionType = {
    dragIndex: number;
    hoverIndex: number;
}

export type MoveTaskActionType = {
    dragIndex: number;
    hoverIndex: number;
    sourceColumn: string;
    targetColumn: string;
}

const initialState: InitialStateType = {
    lists: [],
    draggedItem: {} as DragItem,
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<string>) => {
            const list: ListType = {
                id: uuidv4(),
                title: action.payload,
                tasks: [],
            }
            state.lists = [...state.lists, list];
        },
        addTask: (state, action: PayloadAction<TaskActionType>) => {
            const task: TaskType = {
                id: uuidv4(),
                text: action.payload.text,
            }
            const targetListIndex = findItemIndexById(
                state.lists,
                action.payload.taskId,
            );
            state.lists[targetListIndex].tasks.push(task);
        },
        moveList: (state, action: PayloadAction<MoveListActionType>) => {
            const {dragIndex, hoverIndex} = action.payload;
            state.lists = moveItem(state.lists, dragIndex, hoverIndex);
        },
        moveTask: (state, action: PayloadAction<MoveTaskActionType>) => {
            const {dragIndex, hoverIndex, sourceColumn, targetColumn} = action.payload;
            const sourceLaneIndex = findItemIndexById(state.lists, sourceColumn);
            const targetLaneIndex = findItemIndexById(state.lists, targetColumn);
            const item = state.lists[sourceLaneIndex].tasks.splice(dragIndex, 1)[0];
            state.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);
        },
    }
});

export const {addList, addTask, moveList, moveTask} = listsSlice.actions;

export default listsSlice.reducer
