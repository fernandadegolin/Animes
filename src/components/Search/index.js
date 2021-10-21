import React from "react";
import { useState } from "react/cjs/react.development";
import { useDebounce } from "../../useDebounce";

export const Search = ({ value, onChange, placeholder }) => {
    const [displayValue, setDisplayValue] = useState (value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(e){
        setDisplayValue(e.target.value.toLowerCase());
        debouncedChange(e.target.value.toLowerCase());
    }

    return (
        <input 
        type="search" 
        value={displayValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
        />
    )
}