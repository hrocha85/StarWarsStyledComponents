import React from 'react';
import FormPage from './FormPage/page';
import { DataProvider } from '../../src/app/context/DataContext'; // Importe o DataProvider aqui

export default function Home() {
  return (
    <main>
      <DataProvider> {/* Use o DataProvider em torno de FormPage */}
        <FormPage />
      </DataProvider>
    </main>
  );
}
