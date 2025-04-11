import { useContext, useEffect } from 'react';

import { Container, CircularProgress, Alert, Box, Paper, Typography } from '@mui/material';

import { CovidContext } from '../context/CovidContext';

import CountrySelector from './CountrySelector';
import StatsView from './StatsCard';
import ChartView from './ChartView';

const Dashboard = () => {
    const covidContext = useContext(CovidContext);
    if (!covidContext) throw new Error('CovidContext not found');

    const {
        selectedCountry,
        setData,
        setHistoricalData,
        loading,
        setLoading,
        error,
        setError,
        data,
        historicalData,
    } = covidContext;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                let statsUrl: string, historyUrl: string;
                statsUrl = `https://covid-api.com/api/reports/total?iso=${selectedCountry}`;
                historyUrl = `https://covid-api.com/api/reports?iso=${selectedCountry}`;

                // Fetch current stats.
                const statsResponse = await fetch(statsUrl);
                const statsJson = await statsResponse.json();

                // Fetch historical data.
                const historyResponse = await fetch(historyUrl);
                const historyJson = await historyResponse.json();

                setData({
                    confirmed: statsJson.data?.confirmed,
                    recovered: statsJson.data?.recovered,
                    deaths: statsJson.data?.deaths,
                });

                setHistoricalData(historyJson.data);
            
            } catch (err) {
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedCountry, setData, setHistoricalData, setLoading, setError]);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box mb={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
            <CountrySelector />
            </Paper>
        </Box>

        {loading && (
            <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
            </Box>
        )}

        {error && (
            <Box my={4}>
            <Alert severity="error">{error}</Alert>
            </Box>
        )}

        {!loading && !error && data && (
            <>
                <Box mb={3}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" align="center" fontSize="1.5rem">
                            Statistics
                        </Typography>
                        <StatsView stats={data} />
                    </Paper>
                </Box>
                <Box>
                    <ChartView historicalData={historicalData} />
                </Box>
            </>
            
        )}
        </Container>
    );
};

export default Dashboard;
