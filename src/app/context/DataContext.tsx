"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
}

const DataContext = createContext<DataContextProps | undefined>({} as DataContextProps);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string[]>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default DataContext; // Adicione esta linha para exportar o contexto
