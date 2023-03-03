import React from "react";
import {useDragLayer, XYCoord} from "react-dnd";
import {CustomDragLayerContainer} from "../styles/Components";
import {Column} from "./Column";

export const CustomDragLayer: React.FC = () => {
    const {isDragging, item, currentOffset} = useDragLayer(monitor => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getClientOffset(),
    }));

    const getItemStyles = (currentOffset: XYCoord | null): React.CSSProperties => {
        if (!currentOffset) {
            return {
                display: 'none',
            }
        }
        const {x, y} = currentOffset;

        const transform = `translate(${x}px, ${y}px)`;
        return {
            transform,
            WebkitTransform: transform,
        }
    }

    return isDragging ? (
        <CustomDragLayerContainer>
            <div style={getItemStyles(currentOffset)}>
                <Column
                    title={item.title}
                    id={item.id}
                    index={item.index}
                    key={item.id}
                    isPreview={true}
                />
            </div>
        </CustomDragLayerContainer>
    ) : null
};
