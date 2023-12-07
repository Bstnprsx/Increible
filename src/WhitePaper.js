// WhitePaper.js

import React from 'react';
import './WhitePaper.css';
import BarChart from './BarChart';
import BasicTable from './BasicTable'

function WhitePaper({ children }) {
  return (
    <div className="white-paper">
      <div className="chart-container">
        <BarChart />
      </div>
      <div>
        {children}
      </div>
      <div>
        <BasicTable/>
      </div>
      
    </div>
  );
}

export default WhitePaper;
