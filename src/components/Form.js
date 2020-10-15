import React from 'react';

const Form = ({addData}) =>{
        const handleSubmit = e =>{
            e.preventDefault();
            const name = e.target.name.value;
            const age = e.target.age.value;
            const profession = e.target.profession.value;
            const formData = {name,age,profession};
            addData(formData);
            e.target.name.value = "";
            e.target.age.value = "";
            e.target.profession.value = "";
        }
        return(
            <div className="formContent">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" /><br />
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" name="age" /><br/>
                    <label htmlFor="profession">Profession: </label>
                    <input type="text" id="profession" name="profession" /><br />
                    <input type="submit" value="Submit Information" />
                </form>
            </div>
        )
}

export default Form;