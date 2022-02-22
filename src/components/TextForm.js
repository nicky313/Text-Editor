import { useState, React } from 'react'

export default function TextForm(props) {

  const handleUpBtn = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}
const handleLoBtn = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
}
const handleTitleBtn = ()=>{
    let s = text.toLowerCase();
    let newText = s.split(/\s+/);
    let ch = [], i;
    for (let index = 0; index < newText.length; index++) {
        let c = newText[index].charAt(0).toUpperCase();
        let f = /^[a-zA-Z]/;
        let newText2 = newText[index].replace(f, "");
        i = c + newText2 + " ";
        ch.push(i);
    }
    let NT = ch.toString();
    let NT2 = NT.split(",");
    setText(NT2.join(""));
    props.showAlert("Converted to titlecase!", "success");
}
const handleSenBtn = ()=>{
    let s = text.toLowerCase();
    let fc = s[0].toUpperCase();
    let f = /^[a-zA-Z]/;
    let newText2 = s.replace(f, "");
    setText(fc + newText2);
    props.showAlert("Converted to sensitiveCase!", "success");
}
const handleCBtn = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
}
const handleOnChange = (event)=>{
    setText(event.target.value);
}
const handleExtraSpaces = ()=>{
    let newtext = text.split(/[ ]+/);
    props.showAlert("Removed extra spaces!", "success");
    setText(newtext.join(" "))
}
const handleCpBtn = ()=>{
    let txt = document.getElementById("myBox");
    txt.select();
    txt.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied to Clipboard!", "success");
}
const [text, setText] = useState('');

return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control my-3" style={{backgroundColor: (props.mode === 'dark'?'#161616':'white'), color:(props.mode === 'dark'?'white':'black')}}  placeholder="Enter text here.." value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpBtn}>Uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoBtn}>Lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSenBtn}>Sensitivecase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTitleBtn}>Titlecase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCBtn}>Clear</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCpBtn}>Copy</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview here..."}</p>
    </div>
    </>
)
}