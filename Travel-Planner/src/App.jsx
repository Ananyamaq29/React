// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

const App = () => {
  const [trip, setTrip] = useState(null);

  const handleFormSubmit = (formData) => {
    setTrip(formData);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Summary trip={trip} />
      </main>
    </div>
  );
};

export default App;
