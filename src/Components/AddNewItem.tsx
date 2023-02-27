import React, {useState} from "react";
import {AddItemButton} from "../styles/Components";
import {NewItemForm} from "./NewItemForm";

type AddNewItemTypeProps = {
    onAdd: (text: string) => void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem: React.FC<AddNewItemTypeProps> = (props) => {
    const [showForm, setShowForm] = useState(false);


    if (showForm) {
        return (
            <NewItemForm
                onAdd={text => {
                    props.onAdd(text);
                    setShowForm(false)
                }}
            />
        )
    }

    return (
        <AddItemButton dark={props.dark} onClick={() => setShowForm(true)}>
            {props.toggleButtonText}
        </AddItemButton>
    )
}
