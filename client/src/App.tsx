import React from 'react';
import './App.scss';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Rutul Amin</h1>
        <h2>I'm a Software Developer/ Blockchain Application Developer /Front End developer</h2>
        {/* <p>{!data ? "Loading..." : data}</p> */}
      </header>
    </div>
  );
}

export default App;
