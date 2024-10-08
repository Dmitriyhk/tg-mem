import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  });
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      эй ты урод ебучий еубок сын ты сучий
      <button onClick={onClose}>Закрой нахой эту дрочь</button>
    </div>
  );
}

export default App;
