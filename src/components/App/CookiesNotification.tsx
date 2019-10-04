import React, { FC, useState } from 'react';
import { Size } from '../../utils';
import { Button } from '../Button/Button';

interface ICookiesNotificationProps {
  onAccpet: () => void;
}

export const CookiesNotification: FC<ICookiesNotificationProps> = (props) => {
  const [closed, setClosed] = useState<boolean>(false);
  if (closed) {
    return null;
  }
  const handleClose = () => {
    setClosed(true);
  };
  return (
    <div className='cookies-notification'>
      <p>
        Serwis używa plików cookie w celach związanych z personalizacją i innych. Dowiedz się więcej lub zmień
        ustawienia plików cookie. Korzystając z tej witryny, wyrażasz zgodę na stosowanie przez nas plików cookie.
      </p>
      <div className='cookies-notification--buttons'>
        <Button size={Size.Small} onClick={handleClose}>
          Nie zgadzam sie
        </Button>
        <Button size={Size.Small} primary round onClick={props.onAccpet}>
          Zaakceptuj
        </Button>
      </div>
    </div>
  );
};
