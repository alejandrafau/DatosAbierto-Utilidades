import React, {ReactNode} from "react";
import NavItem from "./NavItem";
type Props = {
    label: string
    placeholder: string
    required:boolean
    id:string
}
const InputTypeFile = ({label, placeholder='',required ,id}:Props ) => {
    return (
        <div className={"form-group item-form"} >
            {/*id y name ==> label sin spaces*/}
            <label className={"form-label"} htmlFor={label.replace(/\s/g, '')}>{label}</label>
            <input
                id={id}
                required={required}
                placeholder={placeholder}
                type={"file"}
                className={"format form-control"}
            >
            </input>
        </div>
    );
};

export default InputTypeFile;