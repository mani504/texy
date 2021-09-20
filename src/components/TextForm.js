import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        setOriginalText(event.target.value);
    }
    const originalText=()=>{
        setText(text2);
    }


    const [text, setText] = useState('Enter Text here.......');
    const [text2 , setOriginalText]=useState('Enter Text here.......');
    return (
        <>
        <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-danger my-1" onClick={originalText}>Original Text</button>
        </div>
        <div className="container my-3">
            <h3>Yout Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.048 * text.split(" ").length} seconds read</p>
            <p>{text}</p>
        </div>
        </>

    )
}