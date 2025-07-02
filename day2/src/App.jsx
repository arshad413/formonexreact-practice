import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>
      <div className="text-6xl font-bold mb-6">{count}</div>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Subtract
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;