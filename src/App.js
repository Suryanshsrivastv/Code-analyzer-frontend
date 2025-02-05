import React from 'react';
import './App.css';
import FileUpload from './fileupload';
import Pattern from './Pattern';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pattern /> {}
      <div className="content">
        <FileUpload />
      </div>
      <Footer />
    </div>
  );
}

export default App;
