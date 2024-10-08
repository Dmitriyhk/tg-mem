import React from 'react';
import { Button } from '../../ui/Button/Button';
const tg = window.Telegram.WebApp;

export const Header = () => {
  const onClose = () => {
    tg.close();
  };
  return (
    <div>
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
