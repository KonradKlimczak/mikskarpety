import React, { FunctionComponent } from 'react';

import { Severity } from '../../utils/Severity';
import Notification from '../Notification/Notification';


interface ICookiesNotificationProps {
  onAccpet: () => void;
}

const CookiesNotification: FunctionComponent<ICookiesNotificationProps> = (props) => {
  return (
    <Notification severity={Severity.Info}>
      Drogi Użytkowniku, Niniejsza strona korzysta z plików cookies dla celów statystycznych i marketingowych. “Dowiedz
      się więcej” lub kliknij “Akceptuję”, w celu zaakceptowania wszystkich rodzajów cookies.
      <button onClick={props.onAccpet}>Akceptuje</button>
    </Notification>
  );
};

export default CookiesNotification;
