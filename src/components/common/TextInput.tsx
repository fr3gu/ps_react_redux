import React, { ChangeEvent } from "react"

interface ITextInputProps {
    name: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    placeholder?: string;
    value?: string;
    error?: string;
}

export const TextInput = (props: ITextInputProps) => {
    let formControlClassName = "form-control";
    if(props.error && props.error.length > 0) {
        formControlClassName += " is-invalid";
    }

    return (
        <div className="form-group">
            <label htmlFor={props.name} className="for">{props.label}</label>
                <input type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    className={formControlClassName}
                    value={props.value}
                    onChange={props.onChange} />
                <div className="invalid-feedback">
                    {props.error}
                </div>
        </div>
    );
};