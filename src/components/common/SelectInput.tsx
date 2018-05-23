import React, { ChangeEvent } from "react"

interface ISelectInputProps {
    name: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    defaultOption?: string;
    value?: string;
    error?: string;
    options?: IOptionData[];
}

export const SelectInput = (props: ISelectInputProps) => {
    let formControlClassName = "form-control";
    if(props.error && props.error.length > 0) {
        formControlClassName += " is-invalid";
    }

    return (
        <div className="form-group">
            <label htmlFor={props.name} className="for">{props.label}</label>
                <select
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    className={formControlClassName}>
                    <option value="">{props.defaultOption}</option>
                    {props.options.map((o, i) => (<option key={i} value={o.value}>{o.text}</option>))}
                </select>
                <div className="invalid-feedback">
                    {props.error}
                </div>
        </div>
    );
};