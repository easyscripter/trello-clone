import {DragItem} from "../types";
import {useDrop} from "react-dnd";
import {moveList} from "../store/slices/listsSlice";
import {useDispatch} from "react-redux";

export const useItemDrop = (hoverIndex: number, targetColumn: string) => {
    const dispatch = useDispatch();
    const [, drop] = useDrop({
        accept: ["COLUMN","CARD"],
        hover: (item: DragItem) => {
            if (item.type === "COLUMN") {
                const dragIndex = item.index;
                if (dragIndex === hoverIndex) {
                    return;
                }
                dispatch(moveList({dragIndex, hoverIndex}));
                item.index = hoverIndex;
            } /*else {
                const dragIndex = item.index;
                const sourceColumn = item.columnId;
                dispatch(moveTask({dragIndex, hoverIndex, sourceColumn, targetColumn}));
                item.index = hoverIndex;
                item.columnId = targetColumn;
            }*/
        }
    });
    return {drop};
}
