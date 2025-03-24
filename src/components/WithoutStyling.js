import React from 'react';

const WithoutStyling = () => {
    return (
        <div>
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
            <div style={{margin:"2%",padding:"2%", backgroundColor: "#f0f0f0", border: "1px solid #ccc"}}>
                <h1 style={{color: "#333"}}> React Form Elements with Styling </h1>
                <form style={{margin:"2%",padding:"2%"}}>
                    <div style={{marginBottom: "1em"}}>
                        <label htmlFor="textField1Styled" style={{display: "block", marginBottom: "0.5em"}}>Text Field 1:</label>
                        <input type="text" id="textField1Styled" name="textField1Styled" style={{padding: "0.5em", border: "1px solid #ccc", borderRadius: "4px"}} />
                    </div>
                    <div style={{marginBottom: "1em"}}>
                        <label htmlFor="textField2Styled" style={{display: "block", marginBottom: "0.5em"}}>Text Field 2:</label>
                        <input type="text" id="textField2Styled" name="textField2Styled" style={{padding: "0.5em", border: "1px solid #ccc", borderRadius: "4px"}} />
                    </div>
                    <div style={{marginBottom: "1em"}}>
                        <label htmlFor="dropdownStyled" style={{display: "block", marginBottom: "0.5em"}}>Dropdown:</label>
                        <select id="dropdownStyled" name="dropdownStyled" style={{padding: "0.5em", border: "1px solid #ccc", borderRadius: "4px"}}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div style={{marginBottom: "1em"}}>
                        <label style={{display: "block", marginBottom: "0.5em"}}>Radio Buttons:</label>
                        <div style={{marginBottom: "0.5em"}}>
                            <input type="radio" id="radio1Styled" name="radioGroupStyled" value="radio1" />
                            <label htmlFor="radio1Styled" style={{marginLeft: "0.5em"}}>Radio 1</label>
                        </div>
                        <div>
                            <input type="radio" id="radio2Styled" name="radioGroupStyled" value="radio2" />
                            <label htmlFor="radio2Styled" style={{marginLeft: "0.5em"}}>Radio 2</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" style={{padding: "0.5em 1em", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer"}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WithoutStyling;