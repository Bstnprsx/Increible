import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 49, 80, 81, 56, 55, 40, 65, 119, 80, 81, 56], // Asegúrate de tener datos para cada mes
      backgroundColor: '#15a0fd', // Azul rey sólido
      borderColor: '#15a0fd', // Azul rey sólido
      borderWidth: 1
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Esto oculta las líneas de la cuadrícula en el eje y
        }
      },
      x: {
        grid: {
          display: false, // Esto oculta las líneas de la cuadrícula en el eje x
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Custom Chart Title'
      }
    }
  };
  

  return (
    <div style={{ border: '2px solid black', padding: '10px' }}> {/* Estilo agregado aquí */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;






