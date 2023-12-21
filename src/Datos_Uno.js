// Datos_Uno.js
import React from 'react';
import './WhitePaper.css';
import BarChart from './BarChart';
import BasicTable from './BasicTable';

function Datos_Uno({ children }) {
  // Se ha eliminado la clase "white-paper" del div contenedor
  return (
    <div className="chart-table-container"> {/* Contenedor flex con alineación y justificación centrada */}
      <div className="chart-container">
        <BarChart />
      </div>
      <div className="table-container">
        <BasicTable />
      </div>
      {children}
    </div>
  );
}

export default Datos_Uno;
