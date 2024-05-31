"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
interface DataContextProps {
  dataInformation: any;
  setDataInformation: (data: any) => void;
}

const DataContext = createContext<DataContextProps | undefined>({} as DataContextProps);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dataInformation, setDataInformation] = useState<string[]>([]);

  return (
    <DataContext.Provider value={{ dataInformation, setDataInformation }}>
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

