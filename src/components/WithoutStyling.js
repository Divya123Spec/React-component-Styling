import React from 'react';

const WithoutStyling = () => {
    return (
        <div style={{margin:"2%",padding:"2%"}}>
            <h1> React Form Elements without any Styling </h1>
            <form style={{margin:"2%",padding:"2%"}}>
                <div>
                    <label htmlFor="textField1">Text Field 1:</label>
                    <input type="text" id="textField1" name="textField1" />
                </div>
                <div>
                    <label htmlFor="textField2">Text Field 2:</label>
                    <input type="text" id="textField2" name="textField2" />
                </div>
                <div>
                    <label htmlFor="dropdown">Dropdown:</label>
                    <select id="dropdown" name="dropdown">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div>
                    <label>Radio Buttons:</label>
                    <div>
                        <input type="radio" id="radio1" name="radioGroup" value="radio1" />
                        <label htmlFor="radio1">Radio 1</label>
                    </div>
                    <div>
                        <input type="radio" id="radio2" name="radioGroup" value="radio2" />
                        <label htmlFor="radio2">Radio 2</label>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default WithoutStyling;