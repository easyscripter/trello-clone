import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {findItemIndexById} from "../../utils/findItemIndexById";

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
};

export type TaskActionType = {
    taskId: string;
    text: string;
}

const initialState: InitialStateType = {
    lists: [],
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
        }
    }
});

export const {addList, addTask} = listsSlice.actions;

export default listsSlice.reducer
