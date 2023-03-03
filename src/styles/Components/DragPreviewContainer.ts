import styled from "styled-components";


type DragPreviewContainerPropsType = {
    isHidden?: boolean;
    isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerPropsType>`
    opacity: ${props => (props.isHidden ? 0 : 1)};
    transform: ${props => (props.isPreview ? "rotate(10deg)" : undefined)};
`;
