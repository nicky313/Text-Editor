import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = '#0b2133';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode= {toggleMode}/>
      <Alert alert={alert}/>
      <div className="Container my-3">
        <TextForm showAlert={showAlert} heading="Text-Editor - Word Counter, Character Counter, Remove Extra Spaces"/>
      </div>
    </>
  );
}

export default App;
