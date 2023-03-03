import {DragItem} from "../types";
import {useDrag} from "react-dnd";
import {useEffect} from "react";
import {getEmptyImage} from "react-dnd-html5-backend";

export const useItemDrag = (item: DragItem) => {
    const [, drag, preview] = useDrag({
        ...item,
        collect: (monitor: any) => ({
           isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true})
    }, [preview]);
    return {drag}
}
