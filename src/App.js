import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import { BrowserRouter,Route,Routes } from 'react-router-dom';



function App() {

  const[mode,setMode]=useState('light'); //Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

const showAlert =(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
}


  const toggleMode=()=>{
    if(mode ==='light'){
    setMode("dark")
    document.body.style.backgroundColor='#09093d';
    showAlert("Dark mode has been enabled","success")
    document.title='textUtils- Dark Mode';
    }
    else{
    setMode("light")
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success")
    document.title='textUtils- light Mode';
    }
  }



  return (
  <>

{/* <Navbar title="TextUtils" aboutText="About us"/> */}
{/* <BrowserRouter> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

{/* hamney yha se hata diya hai magar About us magar vho default proptype se lerha hai isliyeh website meh show hoorha hai */}

<div className="container my-3">

      {/* <Routes>
        <Route exact path="/about" element={<About />}/>
      </Routes>
      <Routes>
        
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/>
      </Routes> */}

  {/* div class container isliyeh li jissey bhech meh ajayeh */}
{/* <About/> */}
</div>
    {/* </BrowserRouter> */}
{/* <Navbar/> */}

<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
  </>
  );
}

export default App;