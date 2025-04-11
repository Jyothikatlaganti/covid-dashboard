import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

import { Line } from 'react-chartjs-2';

import { HistoricalData } from '../context/CovidContext';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
  
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartViewProps {
    historicalData: HistoricalData[] | null;
}

const ChartView: React.FC<ChartViewProps> = ({ historicalData }) => {
    if (!historicalData) return null;

    const labels = historicalData?.map((item) => item.date);
    const dataPoints = historicalData?.map((item) => item.confirmed);

    const data = {
        labels,
        datasets: [
        {
            label: 'Confirmed Cases',
            data: dataPoints,
            borderColor: 'rgb(75, 192, 91)',
            fill: true,
            tension: 0,
            pointRadius: 3,
            borderWidth: 4,
            maxBarThickness: 10,
        },
        {
            label: 'Death Cases',
            data: historicalData?.map((item) => item.deaths),
            borderColor: 'rgb(77, 75, 192)',
            fill: true,
            tension: 0,
            pointRadius: 3,
            borderWidth: 4,
            maxBarThickness: 10,
        },
        {
            label: 'Recovered Cases',
            data: historicalData?.map((item) => item.recovered),
            borderColor: 'rgb(192, 98, 75)',
            fill: true,
            tension: 0,
            pointRadius: 3,
            borderWidth: 4,
            maxBarThickness: 10,
        }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top' as const,
                display: true,
            },
        }
        
    };

    return (
        <Card style={{ marginTop: '1rem' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Trend Analysis
                </Typography>
                <Line data={data} options={options} />
            </CardContent>
        </Card>
    );
};

export default ChartView;
