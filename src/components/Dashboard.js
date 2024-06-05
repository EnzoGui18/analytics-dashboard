
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart';
import Filter from './Filter';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('option1');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulação de dados para teste
        const response = {
          data: [
            { name: 'Jan', value: 400 },
            { name: 'Feb', value: 300 },
            { name: 'Mar', value: 200 },
            { name: 'Apr', value: 278 },
            { name: 'May', value: 189 },
          ]
        };
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Filter onChange={handleFilterChange} />
      <Chart data={data} />
    </div>
  );
};

export default Dashboard;
