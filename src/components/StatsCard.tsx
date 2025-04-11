import { Card, CardContent, Typography, Grid } from '@mui/material';

interface StatsCardProps {
    title: string;
    value: number | null;
}

const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <Card style={{ minWidth: 200, margin: '0.5rem' }}>
            <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5">
                    {value !== null ? value.toLocaleString() : 'N/A'}
                </Typography>
            </CardContent>
        </Card>
  );
};

interface StatsViewProps {
    stats: {
        confirmed: number;
        recovered: number;
        deaths: number;
    } | null;
}

const StatsView = ({ stats }: StatsViewProps) => {
    console.log(stats)
    if (!stats) return null;
    const { confirmed, recovered, deaths } = stats;
    return (
        <Grid container spacing={15} justifyContent="center">
            <Grid component='div'>
                <StatsCard title="Confirmed" value={confirmed} />
            </Grid>
            <Grid component='div'>
                <StatsCard title="Recovered" value={recovered} />
            </Grid>
            <Grid component='div'>
                <StatsCard title="Deaths" value={deaths} />
            </Grid>
        </Grid>
    );
};

export default StatsView;
