// App.js

import React from 'react';
import './App.css';
import WhitePaper from './WhitePaper.js'; // Asegúrate de importar el componente WhitePaper

function App() {
  return (
    <div className="App">
      <WhitePaper>
        {/* Aquí puedes colocar el contenido que irá en la página en blanco */}
        <p></p>
      </WhitePaper>
    </div>
  );
}

export default App;
