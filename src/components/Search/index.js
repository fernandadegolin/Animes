import React from "react";

export const Search = ({ value, onChange, placeholder }) => {
    function handleChange(e){
        onChange(e.target.value.toLowerCase());
    }

    return (
        <input 
        type="search" 
        value={value} 
        onChange={handleChange} 
        placeholder={placeholder} 
        />
    )
}