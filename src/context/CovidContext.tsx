import { createContext, useState, ReactNode } from 'react';

export interface CovidData {
  confirmed: number;
  recovered: number;
  deaths: number;
}

export interface HistoricalData {
  date: string;
  confirmed: number;
  recovered: number;
  deaths: number
}

interface CovidContextProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedIso: string;
  setSelectedIso: (country: string) => void;
  data: CovidData | null;
  setData: (data: CovidData | null) => void;
  historicalData: HistoricalData[] | null;
  setHistoricalData: (data: HistoricalData[] | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const CovidContext = createContext<CovidContextProps | undefined>(undefined);

interface CovidProviderProps {
  children: ReactNode;
}

export const CovidProvider = ({ children }: CovidProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('CAN');
  const [selectedIso, setSelectedIso] = useState<string>('glob');
  const [data, setData] = useState<CovidData | null>(null);
  const [historicalData, setHistoricalData] = useState<HistoricalData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <CovidContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        selectedIso,
        setSelectedIso,
        data,
        setData,
        historicalData,
        setHistoricalData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};
