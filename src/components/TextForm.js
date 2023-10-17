import React,{useState} from 'react'
// useState ko import kiya from React , hamney import kiya jissey text set hosake, jab bhi ham text ko update karenge iss function k through karenge

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handletoClick =()=>{
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleclearClick =()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleCopy =()=>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard!","success")
    }
    const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Remove!","success")
    }
 
    const handleOnChange =(event)=>{
        setText(event.target.value)

    }
    const [text, setText] = useState('Enter text here');
    // text = "new text"; wrong way to change the state
    // setText("new Text") Correct way to change the state


    return (
        <>
<div className='container' style={{color: props.mode==='dark'?'white':'#09093d'}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
<label htmlFor="myBox" className="form-label"></label>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'#09093d'}} id="myBox" rows="8"></textarea>
{/* row=8 jitnhi row hogi utna bada textArea hoga */}
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handletoClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#09093d'}}>

    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").length}Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>

</>
)
}













