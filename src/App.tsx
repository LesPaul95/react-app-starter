import React, { Suspense } from 'react';
import { Counter } from './components/Counter';

function App() {
  return (
    <Suspense fallback={<div />}>
      <header className="App-header">
        <Counter />
      </header>
    </Suspense>
  );
}

export default App;
