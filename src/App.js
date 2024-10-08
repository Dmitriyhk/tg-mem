import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Header />
      <h1>эй ты урод ебучий еубок сын ты сучий</h1>
    </div>
  );
}

export default App;
