import { useState } from "react";

const SearchBar = ({onSearch})=>{
    const [id, setId]= useState("");

    const handleChange = (event)=>{
        setId(event.target.value)
    }
    return (
        <>
        <input type="search"
        onChange={handleChange}
        value={id}
        />
        <button onClick={()=> onSearch(id)}>agregar</button>
        </>
    )
}
export default SearchBar