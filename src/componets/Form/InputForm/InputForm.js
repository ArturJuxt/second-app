import React from "react";
import './InputForm.css';

const InputForm = () => {
    return (
        <form className="inF">
            <input type="name" placeholder="Name" />
            <input type="famly" placeholder="Famly" />
            <input type="submit" />
        </form>
    );
}

export default InputForm;
