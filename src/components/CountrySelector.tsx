import { useContext, useEffect, useState } from 'react';

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { CovidContext } from '../context/CovidContext';

interface Country {
    iso: string;
    name: string;
}

const CountrySelector = () => {

    const covidContext = useContext(CovidContext);
    if (!covidContext) throw new Error('CovidContext not found');

    const { selectedCountry, setSelectedCountry } = covidContext;
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            try {
                const res = await fetch('https://covid-api.com/api/regions?per_page=10000&order=name&sort=asc');
                const json = await res.json();
                
                const fetchedCountries = json.data as Country[];
                setCountries(fetchedCountries);
            } catch (err) {
                console.error('Error fetching countries:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <FormControl fullWidth variant="outlined" style={{ marginBottom: '1rem' }}>
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
                labelId="country-select-label"
                id="country-select"
                value={selectedCountry}
                label="Country"
                onChange={handleChange}
            >
                {countries.map((country) => (
                    <MenuItem key={country.name} value={country.iso}>
                        {country.name}({country.iso})
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountrySelector;
