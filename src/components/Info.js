import React from 'react';

const Info = ({deleteData}) =>{
    const handleSubmit = e =>{
        e.preventDefault();
        const deleteName = e.target.delete.value;
        deleteData(deleteName);
        e.target.delete.value = "";
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="delete">Enter and submit to delete:</label>
            <input type="text" id="delete" name="delete" placeholder="what you wanna delete?" />
            <input type="submit" value="Delete" />
        </form>
    )
}

export default Info;