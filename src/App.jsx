import { useState } from 'react';
import data from '../data.json';
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Stats from './Stats/Stats.jsx'

function App() {
  const [planet, setPlanet] = useState(data[0].name);
  const current = data.find(p => p.name === planet);
  return (
    <>
      <Header data={data} setPlanet={setPlanet} planet={planet} />
      <Main current={current} />
      <Stats current={current} />
    </>
  );
}


export default App