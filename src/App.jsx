import { useState } from 'react';
import './App.css';

import Card from './components/Card';
import TheFooter from './components/TheFooter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 mt-3 text-5xl font-bold text-gray-900">
          Armonie Diverse
        </h1>

        {/* Componente "Card" */}
        <Card />

        {/* Componente "Card" */}
        <TheFooter />
      </div>
    </>
  );
}

export default App;
