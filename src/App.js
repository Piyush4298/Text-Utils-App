import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

// import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />
      <div className='container my-4'>
        {/* <Routes> */}
          {/* <Route path="/" element={<Textform heading="Enter Text to Manipulate" mode={mode} showAlert={showAlert} />} /> */}
          <Textform heading="Enter Text to Manipulate" mode={mode} showAlert={showAlert} />
          {/* <Route path="about" element={<About />} />
        </Routes> */}
      </div>

    </div>
  );
}

export default App;
