import React, {FormEvent, useState} from "react";
import {NewItemFormButton, NewItemFormContainer, NewItemFormInput} from "../styles/Components";
import {useFocus} from "../hooks/useFocus";

type NewItemFormTypeProps = {
    onAdd: (text: string) => void;
}

export const NewItemForm: React.FC<NewItemFormTypeProps> = (props) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const {target} = event;

        if (target) {
            setText((target as HTMLInputElement).value);
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemFormInput
                ref={inputRef}
                value={text}
                onChange={handleChange}
            />
            <NewItemFormButton onClick={() => props.onAdd(text)}>
                Создать
            </NewItemFormButton>
        </NewItemFormContainer>
    )
}
